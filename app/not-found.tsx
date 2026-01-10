import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <div
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-6xl font-bold mb-4 text-[#002676] font-heading">404</h1>
          <p className="text-xl text-gray-700 mb-8">Page not found</p>
          <Link
            href="/"
            className="text-[#002676] hover:text-[#FDB515] font-medium transition-colors font-heading"
          >
            Return home →
          </Link>
        </div>
      </div>
    </div>
  )
}
