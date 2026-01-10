-- Update 'startups' category to 'entrepreneurship'
-- Run this in Supabase SQL Editor

UPDATE public.categories
SET 
  name = 'Entrepreneurship',
  slug = 'entrepreneurship'
WHERE slug = 'startups';

-- Also update any existing post_categories relationships
-- (This will automatically update via the foreign key relationship)

