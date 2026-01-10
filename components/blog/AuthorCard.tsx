import type { User } from '@/lib/types/database'

interface AuthorCardProps {
  author: User
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="border border-border rounded-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        {author.avatar_url ? (
          <img
            src={author.avatar_url}
            alt={author.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#002676]/20 flex items-center justify-center text-[#002676] font-bold text-xl">
            {author.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold">{author.name}</h3>
          {author.bio && <p className="text-muted text-sm">{author.bio}</p>}
        </div>
      </div>
    </div>
  )
}

