import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { requireAuthor } from '@/lib/utils/auth'
import { getCategories } from '@/lib/utils/db'
import { PostEditor } from '@/components/admin/PostEditor'
import type { Post } from '@/lib/types/database'

interface EditPostPageProps {
  params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const user = await requireAuthor()
  const { id } = await params
  const supabase = await createClient()

  const { data: post } = await supabase
    .from('posts')
    .select(`
      *,
      post_categories(
        category:categories(*)
      )
    `)
    .eq('id', id)
    .single()

  if (!post) {
    notFound()
  }

  // Check if user can edit this post
  if (post.author_id !== user.id && user.role !== 'admin') {
    notFound()
  }

  const categories = await getCategories()

  const postWithCategories: Post = {
    ...post,
    categories: post.post_categories?.map((pc: any) => pc.category) || [],
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      <PostEditor post={postWithCategories} categories={categories} />
    </div>
  )
}

