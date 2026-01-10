interface QuoteBlockProps {
  quote: string
  author: string
}

export function QuoteBlock({ quote, author }: QuoteBlockProps) {
  return (
    <div className="relative my-10 bg-[#fef9e7] border-l-4 border-[#FDB515] pl-8 pr-6 py-8">
      {/* Red dot */}
      <div className="absolute -left-2 top-6 w-3 h-3 bg-red-600 rounded-full"></div>
      
      {/* Large quote marks */}
      <div className="absolute left-6 top-4 text-gray-300 text-7xl font-serif leading-none select-none" style={{ fontFamily: 'Georgia, serif' }}>
        "
      </div>
      
      {/* Quote content */}
      <div className="relative z-10 pl-10">
        <blockquote className="text-xl font-bold text-[#002676] mb-4 leading-relaxed">
          {quote}
        </blockquote>
        <cite className="text-base text-gray-600 not-italic block">
          — {author}
        </cite>
      </div>
    </div>
  )
}

