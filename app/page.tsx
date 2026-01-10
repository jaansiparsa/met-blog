import { Hero } from '@/components/blog/Hero'
import { InTheNews } from '@/components/blog/InTheNews'
import { StudentStories } from '@/components/blog/StudentStories'
import { WhatMakesUnique } from '@/components/blog/WhatMakesUnique'
import { getPublishedPosts } from '@/lib/utils/db'

export default async function HomePage() {
  const posts = await getPublishedPosts(6)

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <div
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <Hero />

          {/* Student Stories Section */}
          <StudentStories posts={posts} />

          {/* What Makes M.E.T. Unique Section */}
          <WhatMakesUnique />

          {/* In the News Section */}
          <InTheNews />
        </div>
      </div>
    </div>
  )
}
