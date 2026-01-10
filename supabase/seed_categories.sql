-- Seed categories for M.E.T. blog
-- Run this in Supabase SQL Editor

INSERT INTO public.categories (name, slug, description) VALUES
  ('Classes', 'classes', 'Academic coursework and class experiences in the M.E.T. program'),
  ('Extracurriculars', 'extracurriculars', 'Student activities, clubs, and organizations'),
  ('Entrepreneurship', 'entrepreneurship', 'Entrepreneurship and startup experiences'),
  ('Career', 'career', 'Career development, internships, and job experiences'),
  ('Community', 'community', 'M.E.T. community events, connections, and culture')
ON CONFLICT (slug) DO NOTHING;

