import Link from 'next/link'

interface NewsCardProps {
  logo: string
  date: string
  title: string
  link: string
}

export function NewsCard({ logo, date, title, link }: NewsCardProps) {
  return (
    <div className="bg-white rounded-none p-6 border border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="mb-4 h-10 w-48 flex items-center justify-start">
        <img
          src={logo}
          alt="News source logo"
          className="h-10 w-auto object-contain max-w-full"
        />
      </div>
      
      {/* Date */}
      <time className="text-sm text-gray-500 mb-3 block">{date}</time>
      
      {/* Title */}
      <h3 className="text-lg font-bold text-[#002676] font-heading mb-4 flex-grow">
        {title}
      </h3>
      
      {/* Read Article Link - Fixed at bottom */}
      <div className="mt-auto">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#002676] font-medium hover:text-[#FDB515] transition-colors inline-flex items-center gap-1"
        >
          Read Article
          <span className="text-[#002676]">→</span>
        </Link>
      </div>
    </div>
  )
}
