import type { User } from '@/lib/types/database'

interface AuthorPolaroidProps {
  author: User
}

export function AuthorPolaroid({ author }: AuthorPolaroidProps) {
  return (
    <div className="relative">
      {/* Red Pushpin */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
        <div className="w-4 h-4 bg-red-600 rounded-full shadow-md"></div>
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
      </div>

      {/* Polaroid Card */}
      <div className="bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transform -rotate-1">
        {/* Author Image */}
        <div className="bg-gray-200 aspect-square mb-3 overflow-hidden rounded-sm">
          {author.avatar_url ? (
            <img
              src={author.avatar_url}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="w-16 h-16 rounded-full bg-[#002676]/20 flex items-center justify-center text-[#002676] font-bold text-2xl">
                {author.name.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
        </div>

        {/* Author Info */}
        <div className="px-2 pb-2">
          <h3 className="text-lg font-bold text-[#002676] mb-1 text-center">
            {author.name}
          </h3>
          {author.tagline && (
            <p className="text-xs text-gray-600 text-center leading-tight">
              {author.tagline}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

