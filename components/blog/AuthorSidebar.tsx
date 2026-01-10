import type { Post, User } from '@/lib/types/database'

import { AuthorPolaroid } from './AuthorPolaroid'
import { MoreFromAuthor } from './MoreFromAuthor'

interface AuthorSidebarProps {
  author: User
  relatedPosts?: Post[]
}

export function AuthorSidebar({ author, relatedPosts }: AuthorSidebarProps) {
  return (
    <aside className="space-y-6">
      <AuthorPolaroid author={author} />
      {relatedPosts && relatedPosts.length > 0 && (
        <MoreFromAuthor authorName={author.name} posts={relatedPosts} />
      )}
    </aside>
  )
}

