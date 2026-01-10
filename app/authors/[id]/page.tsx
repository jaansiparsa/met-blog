import { notFound } from 'next/navigation'
import { getUserById, getPostsByAuthor } from '@/lib/utils/db'
import { AuthorCard } from '@/components/blog/AuthorCard'
import { PostCard } from '@/components/blog/PostCard'

interface AuthorPageProps {
  params: Promise<{ id: string }>
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { id } = await params
  const [author, posts] = await Promise.all([
    getUserById(id),
    getPostsByAuthor(id),
  ])

  if (!author) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <AuthorCard author={author} />
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Posts by {author.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <p className="text-muted text-center py-12">
            No posts yet by this author.
          </p>
        )}
      </div>
    </div>
  )
}


