'use client'

import { useEffect, useState } from 'react'
import { GalleryCard } from '@/components/gallery/GalleryCard'
import type { GalleryItem } from '@/lib/types/database'

export function GalleryClient() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGalleryItems() {
      try {
        const response = await fetch('/api/gallery')
        if (!response.ok) {
          throw new Error('Failed to fetch gallery items')
        }
        const data = await response.json()
        setGalleryItems(data.items || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching gallery items:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGalleryItems()
  }, [])

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block w-8 h-8 border-2 border-berkeley-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p>Error loading gallery: {error}</p>
      </div>
    )
  }

  if (galleryItems.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600">
        Gallery content coming soon...
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {galleryItems.map((item, index) => (
        <GalleryCard
          key={item.id}
          item={item}
          priority={index < 4} // Prioritize first 4 images for better LCP
        />
      ))}
    </div>
  )
}

