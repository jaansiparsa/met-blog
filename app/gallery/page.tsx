import { GalleryClient } from './GalleryClient'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] py-12">
      <div
        style={{
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
            {/* Title */}
            <h1 className="text-6xl font-bold text-berkeley-blue mb-4 text-center font-heading">
              Photo Wall
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-8">
              can you see yourself here? because we sure can!
            </p>
          </div>

          {/* Gallery Grid */}
          <GalleryClient />
        </div>
      </div>
    </div>
  )
}
