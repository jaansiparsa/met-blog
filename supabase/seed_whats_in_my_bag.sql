-- New article: What's In My Bag? (author: 22d0ddd3-f583-4480-be59-7a6910517933)
-- Run this in Supabase SQL Editor to add the post

INSERT INTO public.posts (
  id,
  title,
  subtitle,
  slug,
  content,
  excerpt,
  author_id,
  status,
  published_at,
  created_at,
  updated_at,
  featured_image_url
) VALUES (
  gen_random_uuid(),
  'What''s In My Bag?',
  'Mechanical Engineering x Business',
  'whats-in-my-bag',
  '# What''s In My Bag?

![What''s in my bag](https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/post-images/Screenshot%202026-03-05%20at%205.12.11%20PM.png)

## The Laptop Pocket(s)

1. **Asus Zenbook (32gb ram)**
   - My entire academic life.
   - Runs CAD, FEA Simulations, Matlab, Powerpoint, Canva, 100+ chrome tabs, and more!
   - Once survived five Solidworks files open at the same time.

2. **iPad + Apple Pencil**
   - All my notes live here.
   - Really easy to annotate slides, upload practice problems, and markup PDFs.
   - iPads were made for the college student.

3. **Graph Paper Notebook**
   - Best scratch paper for all my classes!

4. **Rhodia A5 (brain dump journal)**
   - Where all of my unpolished ideas go.
   - Random lists, design tweaks, notes (when my iPad dies).
   - This post started here!

## The Pencil Case

1. **Tombow Mono 0.5mm Lead Pencil**

2. **Mujii 0.5mm pen (Black)**
   - My favorite pen ever!

3. **Zebra mildliners**
   - In yellow and green!

## Main Pocket

1. **32 oz water bottle**

2. **Logitech G305 mouse**
   - Trackpads and CAD are not friends.

3. **USB-C chargers**

4. **Wired Headphones**

## Front Pocket(s)

1. Keys + Airtag
2. Hand Sanitizer
3. Battery Pack
4. Laptop Charger
5. Emergency Pack (band-aids, pads, Advil, etc.)
6. Granola Bar',
  'A peek inside the bag of an M.E.T. student: laptop, iPad, notebooks, pencil case, and everyday essentials.',
  '22d0ddd3-f583-4480-be59-7a6910517933',
  'published',
  NOW(),
  NOW(),
  NOW(),
  'https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/post-images/Screenshot%202026-03-05%20at%205.12.11%20PM.png'
);
