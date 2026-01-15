-- Example: How to insert gallery items
-- Replace the image_url with your actual Supabase Storage URLs
-- Format: https://[your-project-ref].supabase.co/storage/v1/object/public/gallery-images/[filename]

-- Example gallery items (replace with your actual data)
INSERT INTO public.gallery_items (image_url, date, description, display_order)
VALUES
  (
    'https://[your-project-ref].supabase.co/storage/v1/object/public/gallery-images/photo1.jpg',
    '2024-01-15',
    'Students working on a group project',
    1
  ),
  (
    'https://[your-project-ref].supabase.co/storage/v1/object/public/gallery-images/photo2.jpg',
    '2024-02-20',
    'M.E.T. program orientation event',
    2
  ),
  (
    'https://[your-project-ref].supabase.co/storage/v1/object/public/gallery-images/photo3.jpg',
    '2024-03-10',
    'Engineering lab session',
    3
  );

-- To get the URL format:
-- 1. Upload image to Supabase Storage in the 'gallery-images' bucket
-- 2. Click on the uploaded file
-- 3. Copy the "Public URL" 
-- 4. Use that URL as the image_url value

