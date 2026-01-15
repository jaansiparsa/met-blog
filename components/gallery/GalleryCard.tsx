'use client'

import { GalleryImage } from './GalleryImage'
import type { GalleryItem } from '@/lib/types/database'
import { useState } from 'react'

interface GalleryCardProps {
  item: GalleryItem
  priority?: boolean
}

export function GalleryCard({ item, priority = false }: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Format date as mm/dd/yyyy
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <div
      className="relative w-full aspect-square cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Layer - Always visible */}
      <div className="absolute inset-0 w-full h-full rounded-none overflow-hidden">
        <GalleryImage
          src={item.image_url}
          alt={item.description || 'Gallery image'}
          priority={priority}
        />
      </div>

      {/* Translucent White Overlay with Date and Description */}
      <div
        className="absolute inset-0 w-full h-full bg-white/80 p-6 flex flex-col justify-center items-center text-center rounded-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      >
        <time className="text-sm text-gray-500 mb-3 font-heading">
          {formattedDate}
        </time>
        {item.description && (
          <p className="text-gray-700 font-heading">{item.description}</p>
        )}
      </div>
    </div>
  )
}

