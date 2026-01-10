import Link from 'next/link'
import { MdOpenInNew } from 'react-icons/md'

export async function Header() {
  return (
    <header className="border-b border-border bg-[#f5f5f0] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-berkeley-blue hover:text-california-gold transition-colors font-heading">
            Discover M.E.T.
          </Link>
          <div className="flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-berkeley-blue hover:text-california-gold transition-colors font-heading">
              Home
            </Link>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <Link href="/blogs" className="text-berkeley-blue hover:text-california-gold transition-colors font-heading">
              Stories
            </Link>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <Link href="/gallery" className="text-berkeley-blue hover:text-california-gold transition-colors font-heading">
              Gallery
            </Link>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <Link href="/contact" className="text-berkeley-blue hover:text-california-gold transition-colors font-heading">
              Contact
            </Link>
          </div>
          <Link
            href="https://met.berkeley.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-berkeley-blue hover:text-california-gold transition-colors font-heading flex items-center gap-1"
          >
            Official Site
            <MdOpenInNew className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
