import Link from 'next/link'
import type { Post } from '@/lib/types/database'

interface PolaroidCardProps {
  post: Post
}

// Calculate read time (rough estimate: 200 words per minute)
function calculateReadTime(content: string): number {
  const words = content.split(/\s+/).length
  return Math.ceil(words / 200)
}

export function PolaroidCard({ post }: PolaroidCardProps) {
  const readTime = calculateReadTime(post.content)
  const category = post.categories?.[0]

  return (
    <div className="relative">
      {/* Red Pushpin */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
        <div className="w-4 h-4 bg-red-600 rounded-full shadow-md"></div>
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
      </div>

      {/* Polaroid Card */}
      <Link href={`/blogs/${post.slug}`}>
        <article
          className="bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transform -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 cursor-pointer max-w-[360px] mx-auto"
          style={{
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
          }}
        >
          {/* Image Section */}
          <div className="bg-gray-200 aspect-[4/3] mb-3 overflow-hidden">
            {post.featured_image_url ? (
              <img
                src={post.featured_image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="px-2 pb-2">
            {/* Category */}
            {category && (
              <div className="text-xs text-[#002676] font-medium mb-1 uppercase tracking-wide">
                {category.name}
              </div>
            )}

            {/* Title */}
            <h3 className="text-lg font-bold text-[#002676] mb-2 leading-tight">
              {post.title}
            </h3>

            {/* Subtitle */}
            {post.subtitle && (
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {post.subtitle}
              </p>
            )}

            {/* Author and Read Time */}
            <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-200 pt-2">
              <span className="font-medium">{post.author?.name || 'Anonymous'}</span>
              <span>{readTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    </div>
  )
}

