export type UserRole = 'student' | 'admin' | 'viewer'
export type PostStatus = 'draft' | 'published' | 'archived'

export interface User {
  id: string
  role: UserRole
  name: string
  bio: string | null
  tagline: string | null
  avatar_url: string | null
  created_at: string
}

export interface Post {
  id: string
  title: string
  subtitle: string | null
  slug: string
  content: string
  excerpt: string | null
  author_id: string
  status: PostStatus
  featured_image_url: string | null
  published_at: string | null
  created_at: string
  updated_at: string
  author?: User
  categories?: Category[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
}

export interface PostCategory {
  post_id: string
  category_id: string
  category?: Category
}

