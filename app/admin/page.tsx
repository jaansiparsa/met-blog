import { createClient } from '@/lib/supabase/server'
import { requireAuth } from '@/lib/utils/auth'
import Link from 'next/link'

export default async function AdminDashboard() {
  const user = await requireAuth()
  const supabase = await createClient()

  const { count: postsCount } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })

  const { count: publishedCount } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published')

  const { count: draftCount } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'draft')

  const { count: categoriesCount } = await supabase
    .from('categories')
    .select('*', { count: 'exact', head: true })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-border">
          <h3 className="text-sm text-muted mb-2">Total Posts</h3>
          <p className="text-3xl font-bold">{postsCount || 0}</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-border">
          <h3 className="text-sm text-muted mb-2">Published</h3>
          <p className="text-3xl font-bold">{publishedCount || 0}</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-border">
          <h3 className="text-sm text-muted mb-2">Drafts</h3>
          <p className="text-3xl font-bold">{draftCount || 0}</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-border">
          <h3 className="text-sm text-muted mb-2">Categories</h3>
          <p className="text-3xl font-bold">{categoriesCount || 0}</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg border border-border">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link
            href="/admin/posts/new"
            className="bg-accent text-white px-4 py-2 rounded hover:opacity-90"
          >
            Create New Post
          </Link>
          <Link
            href="/admin/posts"
            className="border border-border px-4 py-2 rounded hover:bg-gray-50"
          >
            Manage Posts
          </Link>
          <Link
            href="/admin/categories"
            className="border border-border px-4 py-2 rounded hover:bg-gray-50"
          >
            Manage Categories
          </Link>
        </div>
      </div>
    </div>
  )
}


