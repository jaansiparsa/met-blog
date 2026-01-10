import { getCategories } from '@/lib/utils/db'
import { requireAuthor } from '@/lib/utils/auth'
import { PostEditor } from '@/components/admin/PostEditor'

export default async function NewPostPage() {
  await requireAuthor()
  const categories = await getCategories()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">New Post</h1>
      <PostEditor categories={categories} />
    </div>
  )
}

