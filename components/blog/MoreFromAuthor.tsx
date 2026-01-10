import Link from 'next/link'
import type { Post } from '@/lib/types/database'

interface MoreFromAuthorProps {
  authorName: string
  posts: Post[]
}

export function MoreFromAuthor({ authorName, posts }: MoreFromAuthorProps) {
  if (!posts || posts.length === 0) return null

  const firstName = authorName.split(' ')[0]

  return (
    <div className="bg-white p-6 shadow-sm">
      <h4 className="text-lg font-bold text-gray-800 mb-3">
        More from {firstName}
      </h4>
      <div className="border-t-2 border-[#FDB515] mb-4"></div>
      <ul className="space-y-4">
        {posts.slice(0, 3).map((post) => (
          <li key={post.id}>
            <Link
              href={`/blogs/${post.slug}`}
              className="flex items-start gap-3 group hover:opacity-80 transition-opacity"
            >
              <div className="w-2 h-2 rounded-full bg-[#FDB515] mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="font-medium text-gray-800 group-hover:text-[#002676] transition-colors">
                  {post.title}
                  <span className="ml-2 text-[#FDB515]">→</span>
                </p>
                {post.categories && post.categories.length > 0 && (
                  <p className="text-xs text-gray-500 mt-1">
                    {post.categories[0].name}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

