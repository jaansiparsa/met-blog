import Link from 'next/link'
import { StickyNote } from "./StickyNote"
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ExplodingGrid } from './ExplodingGrid'

export function WhatMakesUnique() {
  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-heading">
            What Makes M.E.T. Unique
          </h2>
        </ScrollReveal>

        {/* Sticky Note Labels */}
        <div className="flex justify-center gap-8 md:gap-12 mb-12">
          <ScrollReveal delay={0}>
            <StickyNote rotation={-2}>
              <span className="text-lg font-bold text-[#002676] font-heading">ENGINEERING</span>
            </StickyNote>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <StickyNote rotation={1}>
              <span className="text-lg font-bold text-[#002676] font-heading">BUSINESS</span>
            </StickyNote>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <StickyNote rotation={-1}>
              <span className="text-lg font-bold text-[#002676] font-heading">NETWORK</span>
            </StickyNote>
          </ScrollReveal>
        </div>

        {/* Image Grid */}
        <ExplodingGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Row 1 */}
          {/* Engineering - Image 1 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Students working on engineering project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Business - Image 2 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Business presentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Network - Image 3 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Students networking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 2 */}
          {/* Engineering - Image 4 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Business - Image 5 with YOU! overlay */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                alt="Professional networking"
                className="w-full h-full object-cover"
              />
            </div>
            {/* YOU! sticky note overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <StickyNote rotation={2} color="gold">
                <span className="text-2xl font-bold text-[#002676] font-heading">YOU!</span>
              </StickyNote>
            </div>
          </div>

          {/* Network - Image 6 */}
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-none shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
                alt="Mentorship discussion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ExplodingGrid>
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
