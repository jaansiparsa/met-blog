import { getPostBySlug, getPostsByAuthor } from '@/lib/utils/db'

import { AuthorSidebar } from '@/components/blog/AuthorSidebar'
import { CategoryBadge } from '@/components/blog/CategoryBadge'
import { PostContent } from '@/components/blog/PostContent'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

// Calculate read time (rough estimate: 200 words per minute)
function calculateReadTime(content: string): number {
  const words = content.split(/\s+/).length
  return Math.ceil(words / 200)
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const readTime = calculateReadTime(post.content)
  const relatedPosts = post.author
    ? (await getPostsByAuthor(post.author.id)).filter((p) => p.id !== post.id)
    : []

  return (
    <div className="min-h-screen bg-[#f5f5f0] py-12">
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <header className="mb-4">
            {/* Category Tag */}
            {post.categories && post.categories.length > 0 && (
              <div className="mb-4">
                <CategoryBadge category={post.categories[0]} />
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>
            
            {/* Metadata */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              {post.published_at && (
                <time dateTime={post.published_at}>
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>{readTime} min read</span>
            </div>
          </header>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Author Info */}
            <div className="lg:col-span-1">
              {post.author && (
                <AuthorSidebar author={post.author} relatedPosts={relatedPosts} />
              )}
            </div>

            {/* Right Column - Article Content */}
            <div className="lg:col-span-3">
              <article className="bg-white p-8 md:pb-12 px-8 md:px-12 shadow-sm">
                {/* Content */}
                <div className="post-content">
                  <PostContent content={post.content} />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
