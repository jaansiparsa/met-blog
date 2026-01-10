import Link from 'next/link'
import type { Post } from '@/lib/types/database'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <Link href={`/blogs/${post.slug}`}>
        <h2 className="text-2xl font-bold mb-2 text-[#002676] hover:text-[#FDB515] transition-colors">
          {post.title}
        </h2>
        {post.subtitle && (
          <p className="text-lg text-muted mb-3">{post.subtitle}</p>
        )}
        {post.excerpt && (
          <p className="text-muted mb-4 line-clamp-3">{post.excerpt}</p>
        )}
        <div className="flex items-center justify-between text-sm text-muted">
          <div className="flex items-center gap-4">
            {post.author && (
              <span>
                By {post.author.name}
              </span>
            )}
            {post.published_at && (
              <time dateTime={post.published_at}>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </div>
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2">
              {post.categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="px-2 py-1 bg-[#002676]/10 text-[#002676] rounded text-xs hover:bg-[#002676]/20 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}

