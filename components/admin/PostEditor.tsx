'use client'

import type { Category, Post } from '@/lib/types/database'
import { useEffect, useState } from 'react'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

interface PostEditorProps {
  post?: Post
  categories: Category[]
}

export function PostEditor({ post, categories }: PostEditorProps) {
  const router = useRouter()
  const [title, setTitle] = useState(post?.title || '')
  const [subtitle, setSubtitle] = useState(post?.subtitle || '')
  const [slug, setSlug] = useState(post?.slug || '')
  const [content, setContent] = useState(post?.content || '')
  const [excerpt, setExcerpt] = useState(post?.excerpt || '')
  const [status, setStatus] = useState<'draft' | 'published' | 'archived'>(
    post?.status || 'draft'
  )
  const [featuredImageUrl, setFeaturedImageUrl] = useState(
    post?.featured_image_url || ''
  )
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    post?.categories?.map((c) => c.id) || []
  )
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Auto-generate slug from title
  useEffect(() => {
    if (!post && title) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setSlug(generatedSlug)
    }
  }, [title, post])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setError('You must be logged in')
      setLoading(false)
      return
    }

    try {
      if (post) {
        // Update existing post
        const { error: updateError } = await supabase
          .from('posts')
          .update({
            title,
            subtitle: subtitle || null,
            slug,
            content,
            excerpt: excerpt || null,
            status,
            featured_image_url: featuredImageUrl || null,
            published_at:
              status === 'published' && !post.published_at
                ? new Date().toISOString()
                : post.published_at,
            updated_at: new Date().toISOString(),
          })
          .eq('id', post.id)

        if (updateError) throw updateError

        // Update categories
        await supabase
          .from('post_categories')
          .delete()
          .eq('post_id', post.id)

        if (selectedCategories.length > 0) {
          await supabase.from('post_categories').insert(
            selectedCategories.map((categoryId) => ({
              post_id: post.id,
              category_id: categoryId,
            }))
          )
        }
      } else {
        // Create new post
        const { data: newPost, error: insertError } = await supabase
          .from('posts')
          .insert({
            title,
            subtitle: subtitle || null,
            slug,
            content,
            excerpt: excerpt || null,
            author_id: user.id,
            status,
            featured_image_url: featuredImageUrl || null,
            published_at:
              status === 'published' ? new Date().toISOString() : null,
          })
          .select()
          .single()

        if (insertError) throw insertError

        // Add categories
        if (selectedCategories.length > 0 && newPost) {
          await supabase.from('post_categories').insert(
            selectedCategories.map((categoryId) => ({
              post_id: newPost.id,
              category_id: categoryId,
            }))
          )
        }
      }

      router.push('/admin/posts')
      router.refresh()
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred'
      )
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="title" className="block mb-2 font-medium">
          Title *
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="subtitle" className="block mb-2 font-medium">
          Subtitle
        </label>
        <input
          id="subtitle"
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="slug" className="block mb-2 font-medium">
          Slug *
        </label>
        <input
          id="slug"
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          pattern="[a-z0-9-]+"
          className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <p className="mt-1 text-sm text-muted">
          URL-friendly version of the title (lowercase, hyphens only)
        </p>
      </div>

      <div>
        <label htmlFor="excerpt" className="block mb-2 font-medium">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <p className="mt-1 text-sm text-muted">
          Short summary for listing pages
        </p>
      </div>

      <div>
        <label htmlFor="content" className="block mb-2 font-medium">
          Content (Markdown) *
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={20}
          className="w-full px-4 py-2 border border-border rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="featuredImageUrl" className="block mb-2 font-medium">
          Featured Image URL
        </label>
        <input
          id="featuredImageUrl"
          type="url"
          value={featuredImageUrl}
          onChange={(e) => setFeaturedImageUrl(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="status" className="block mb-2 font-medium">
          Status *
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as 'draft' | 'published' | 'archived')
          }
          className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Categories</label>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories([...selectedCategories, category.id])
                  } else {
                    setSelectedCategories(
                      selectedCategories.filter((id) => id !== category.id)
                    )
                  }
                }}
                className="mr-2"
              />
              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-white px-6 py-2 rounded hover:opacity-90 disabled:opacity-50"
        >
          {loading ? 'Saving...' : post ? 'Update Post' : 'Create Post'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="border border-border px-6 py-2 rounded hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

