import { NextResponse } from 'next/server'
import { getGalleryItems } from '@/lib/utils/db'

export async function GET() {
  try {
    const galleryItems = await getGalleryItems()
    return NextResponse.json({ items: galleryItems }, { status: 200 })
  } catch (error) {
    console.error('Error fetching gallery items:', error)
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    )
  }
}

