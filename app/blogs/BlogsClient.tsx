'use client'

import type { Category, Post } from '@/lib/types/database'

import { PolaroidCard } from '@/components/blog/PolaroidCard'
import { useState } from 'react'

interface BlogsClientProps {
  initialPosts: Post[]
  categories: Category[]
}

export function BlogsClient({ initialPosts }: BlogsClientProps) {
  const [filter, setFilter] = useState<string>('all')

  const filteredPosts =
    filter === 'all'
      ? initialPosts
      : initialPosts.filter((post) =>
          post.categories?.some((cat) => cat.slug === filter)
        )

  const filters = [
    { id: 'all', label: 'All Stories' },
    { id: 'classes', label: 'Classes' },
    { id: 'extracurriculars', label: 'Extracurriculars' },
    { id: 'entrepreneurship', label: 'Entrepreneurship' },
    { id: 'career', label: 'Career' },
    { id: 'community', label: 'Community' },
  ]

  return (
    <div
      className="min-h-screen py-12"
      style={{
        backgroundColor: '#f5f5f0',
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 relative">
          {/* Decorative Elements */}
          <div className="absolute left-0 top-0 w-8 h-8 border-2 border-[#FDB515] rounded-full flex items-center justify-center">
            <span className="text-[#FDB515] text-xl">+</span>
          </div>
          <div className="absolute right-0 top-4 w-6 h-6 border-2 border-gray-400 transform rotate-45"></div>

          {/* Title */}
          <h1 className="text-6xl font-bold text-[#002676] mb-4 text-center relative">
            Student{' '}
            <span className="relative inline-block">
              Stories
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-[#FDB515] transform -rotate-1"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-8">
            Authentic experiences from M.E.T. students navigating the intersection
            of engineering and business.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  filter === f.id
                    ? 'bg-[#FDB515] text-[#002676] shadow-md'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-[#002676]'
                }`}
                style={{
                  transform: filter === f.id ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 text-gray-600">
            No stories found. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                style={{
                  transform: `rotate(${(index % 3) * 2 - 2}deg)`,
                }}
                className="transition-transform hover:scale-[1.02]"
              >
                <PolaroidCard post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

