'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { Category } from '@/lib/types/database'

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name')

    if (error) {
      setError(error.message)
    } else {
      setCategories(data || [])
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const supabase = createClient()
    const { error: insertError } = await supabase
      .from('categories')
      .insert({
        name,
        slug: slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        description: description || null,
      })

    if (insertError) {
      setError(insertError.message)
    } else {
      setName('')
      setSlug('')
      setDescription('')
      setShowForm(false)
      loadCategories()
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Categories</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-accent text-white px-4 py-2 rounded hover:opacity-90"
        >
          {showForm ? 'Cancel' : 'New Category'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-border mb-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name *
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-border rounded"
              />
            </div>
            <div>
              <label htmlFor="slug" className="block mb-2 font-medium">
                Slug
              </label>
              <input
                id="slug"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded"
              />
              <p className="mt-1 text-sm text-muted">
                Auto-generated from name if left empty
              </p>
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 font-medium">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-accent text-white px-4 py-2 rounded hover:opacity-90"
            >
              Create Category
            </button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">
                Slug
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 font-medium">{category.name}</td>
                <td className="px-6 py-4 text-muted">{category.slug}</td>
                <td className="px-6 py-4 text-muted">
                  {category.description || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {categories.length === 0 && (
          <div className="text-center py-12 text-muted">
            No categories yet. Create your first category!
          </div>
        )}
      </div>
    </div>
  )
}


