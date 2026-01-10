import Link from 'next/link'
import type { Post } from '@/lib/types/database'
import { PolaroidCard } from './PolaroidCard'

interface StudentStoriesProps {
  posts: Post[]
}

export function StudentStories({ posts }: StudentStoriesProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-heading text-center">
          Hear Student Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center mb-8">
          {posts.slice(0, 3).map((post) => (
            <PolaroidCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-right">
          <Link
            href="/blogs"
            className="text-berkeley-blue hover:text-california-gold transition-colors font-heading font-medium inline-flex items-center gap-2"
          >
            read the blogs
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
