import { createClient } from '@/lib/supabase/server'
import type { Post, Category, User, GalleryItem } from '@/lib/types/database'

export async function getPublishedPosts(limit?: number) {
  const supabase = await createClient()
  let query = supabase
    .from('posts')
    .select(`
      *,
      author:users(*),
      post_categories(
        category:categories(*)
      )
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) throw error

  return data?.map((post: any) => ({
    ...post,
    categories: post.post_categories?.map((pc: any) => pc.category) || [],
  })) as Post[]
}

export async function getPostBySlug(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:users(*),
      post_categories(
        category:categories(*)
      )
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) throw error

  if (!data) return null

  return {
    ...data,
    categories: data.post_categories?.map((pc: any) => pc.category) || [],
  } as Post
}

export async function getCategories() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  if (error) throw error
  return data as Category[]
}

export async function getCategoryBySlug(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as Category | null
}

export async function getPostsByCategory(categorySlug: string) {
  const category = await getCategoryBySlug(categorySlug)
  if (!category) return []

  const supabase = await createClient()
  
  // First get post IDs for this category
  const { data: postCategories, error: pcError } = await supabase
    .from('post_categories')
    .select('post_id')
    .eq('category_id', category.id)

  if (pcError) throw pcError
  if (!postCategories || postCategories.length === 0) return []

  const postIds = postCategories.map((pc) => pc.post_id)

  // Then get the posts
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:users(*),
      post_categories(
        category:categories(*)
      )
    `)
    .eq('status', 'published')
    .in('id', postIds)
    .order('published_at', { ascending: false })

  if (error) throw error

  return data?.map((post: any) => ({
    ...post,
    categories: post.post_categories?.map((pc: any) => pc.category) || [],
  })) as Post[]
}

export async function getUserById(userId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data as User | null
}

export async function getPostsByAuthor(authorId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:users(*),
      post_categories(
        category:categories(*)
      )
    `)
    .eq('author_id', authorId)
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) throw error

  return data?.map((post: any) => ({
    ...post,
    categories: post.post_categories?.map((pc: any) => pc.category) || [],
  })) as Post[]
}

export async function getGalleryItems() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gallery_items')
    .select('*')
    .order('display_order', { ascending: true })
    .order('date', { ascending: false })

  if (error) throw error
  return (data || []) as GalleryItem[]
}

