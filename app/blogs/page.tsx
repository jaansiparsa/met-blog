import { getCategories, getPublishedPosts } from '@/lib/utils/db'

import { BlogsClient } from './BlogsClient'

export default async function BlogsPage() {
  const [posts, categories] = await Promise.all([
    getPublishedPosts(),
    getCategories(),
  ])

  return <BlogsClient initialPosts={posts} categories={categories} />
}
