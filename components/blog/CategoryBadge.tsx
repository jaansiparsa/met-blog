import Link from 'next/link'
import type { Category } from '@/lib/types/database'

interface CategoryBadgeProps {
  category: Category
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="inline-block px-4 py-2 bg-[#FDB515] text-gray-900 rounded-md text-sm font-medium uppercase tracking-wide hover:opacity-90 transition-opacity"
    >
      {category.name}
    </Link>
  )
}

