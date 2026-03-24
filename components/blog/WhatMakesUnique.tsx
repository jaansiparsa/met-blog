import Link from 'next/link'
import { StickyNote } from "./StickyNote"

export function WhatMakesUnique() {
  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-heading">
          What Makes M.E.T. Unique
        </h2>

        {/* Sticky Note Labels */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
          <StickyNote rotation={-2}>
            <span className="text-lg font-bold text-[#002676] font-heading">ENGINEERING</span>
          </StickyNote>

          <StickyNote rotation={1}>
            <span className="text-lg font-bold text-[#002676] font-heading">BUSINESS</span>
          </StickyNote>

          <StickyNote rotation={-1}>
            <span className="text-lg font-bold text-[#002676] font-heading">NETWORK</span>
          </StickyNote>

          <StickyNote rotation={2} color="blue">
            <span className="text-lg font-bold text-[#002676] font-heading">YOU!</span>
          </StickyNote>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Row 1 */}
          {/* Engineering - Image 1 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/gallery-images/gatikyc.jpeg"
                alt="M.E.T. program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Business - Image 2 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/gallery-images/Screenshot%202026-03-05%20at%209.35.53%20PM.png"
                alt="M.E.T. program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Network - Image 3 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/gallery-images/Screenshot%202026-03-05%20at%209.36.09%20PM.png"
                alt="M.E.T. program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 2 */}
          {/* Engineering - Image 4 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/gallery-images/beginningyr1.png"
                alt="M.E.T. program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Business - Image 5 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/gallery-images/EFP.jpg"
                alt="M.E.T. program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Network - Image 6 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/gallery-images/Screenshot%202026-03-05%20at%209.41.45%20PM.png"
                alt="M.E.T. program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="text-right mt-12">
          <Link
            href="/gallery"
            className="text-berkeley-blue hover:text-california-gold transition-colors font-heading font-medium inline-flex items-center gap-2"
          >
            view the gallery
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
