-- Sample posts for user 22d0ddd3-f583-4480-be59-7a6910517933
-- Run this in Supabase SQL Editor to add sample data

-- First, ensure the user exists (if not, you'll need to create them first)
-- The user should already exist in auth.users and public.users tables

-- Sample Post 1: Welcome/Introduction
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
  updated_at
) VALUES (
  gen_random_uuid(),
  'Welcome to Discover M.E.T.',
  'A journey into the Management, Entrepreneurship & Technology program',
  'welcome-to-discover-met',
  '# Welcome to Discover M.E.T.

This is your first sample post! The M.E.T. program combines the best of business and engineering education.

## What Makes M.E.T. Special?

- **Dual Degree**: Earn both a business and engineering degree
- **Innovation Focus**: Learn to build and scale technology companies
- **Real-World Projects**: Work on actual startup ideas and engineering challenges

## Getting Started

As a student in the M.E.T. program, you''ll experience a unique curriculum that bridges two worlds. The program is designed for students who want to be both technical leaders and business innovators.

> "The best way to predict the future is to create it." - This program gives you the tools to do exactly that.

## What to Expect

Throughout your journey, you''ll work on projects that matter, connect with industry leaders, and build a network of like-minded innovators. The program is challenging, but incredibly rewarding.

Good luck on your journey!',
  'An introduction to the M.E.T. program and what makes it unique. Learn about the dual degree structure and innovation-focused curriculum.',
  '22d0ddd3-f583-4480-be59-7a6910517933',
  'published',
  NOW() - INTERVAL '2 days',
  NOW() - INTERVAL '2 days',
  NOW() - INTERVAL '2 days'
);

-- Sample Post 2: First Week Experience
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
  updated_at
) VALUES (
  gen_random_uuid(),
  'My First Week in M.E.T.',
  'Reflections on orientation, classes, and meeting my cohort',
  'my-first-week-in-met',
  '# My First Week in M.E.T.

The first week has been a whirlwind of excitement, new faces, and challenging coursework. Here''s what I''ve learned so far.

## Orientation Highlights

Orientation week was intense but incredibly valuable. We met our cohort, learned about the program structure, and got our first taste of the collaborative culture that defines M.E.T.

### Key Takeaways

1. **The Cohort is Amazing**: Everyone brings unique perspectives from different backgrounds
2. **The Workload is Real**: This isn''t your typical college experience
3. **Support is Everywhere**: Faculty, staff, and upperclassmen are all here to help

## First Classes

### Engineering Fundamentals

Our first engineering class immediately jumped into real-world problem solving. No gentle introductions here - we''re building things from day one.

### Business Strategy

The business side is equally engaging. We''re already discussing case studies and learning frameworks for analyzing companies and markets.

## The M.E.T. Community

What''s struck me most is how supportive everyone is. Study groups form organically, and people genuinely want to see each other succeed.

## Looking Ahead

I''m excited (and a bit nervous) about what''s to come. The pace is fast, but I can already see how this program will shape my thinking and career.

Stay tuned for more updates!',
  'A first-year student shares their experience from the first week of the M.E.T. program, including orientation, classes, and community.',
  '22d0ddd3-f583-4480-be59-7a6910517933',
  'published',
  NOW() - INTERVAL '1 day',
  NOW() - INTERVAL '1 day',
  NOW() - INTERVAL '1 day'
);

-- Sample Post 3: Project Experience
INSERT INTO public.posts (
  id,
  title,
  subtitle,
  slug,
  content,
  excerpt,
  author_id,
  status,
  featured_image_url,
  published_at,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'Building My First M.E.T. Project',
  'Lessons learned from developing a startup idea in the program',
  'building-my-first-met-project',
  '# Building My First M.E.T. Project

This semester, I''ve been working on a project that combines my engineering skills with business strategy. Here''s what I''ve learned.

## The Idea

The project started with a simple question: *How can we make sustainable transportation more accessible?*

From there, my team and I developed a concept for an electric scooter sharing platform specifically designed for college campuses.

## The Engineering Challenge

### Technical Stack

- **Backend**: Node.js with Express
- **Frontend**: React with TypeScript
- **Database**: PostgreSQL
- **IoT**: Raspberry Pi for scooter tracking

Building the hardware-software integration was the most challenging part. We needed real-time GPS tracking, battery monitoring, and a user-friendly mobile interface.

## The Business Model

### Market Research

We surveyed 500+ students across three campuses to validate demand. The results were promising:

- 78% would use the service if available
- Average willingness to pay: $15/month
- Top concern: Safety and reliability

### Revenue Projections

Our financial model showed break-even at 200 active users per campus, with strong unit economics beyond that point.

## Lessons Learned

1. **Start Simple**: Our first prototype was too complex. We learned to iterate quickly.
2. **User Feedback is Gold**: Every conversation with potential users revealed something new.
3. **Balance is Key**: Juggling engineering and business aspects requires constant prioritization.

## What''s Next

We''re preparing to pitch this to potential investors and campus administrators. The M.E.T. program has given us the tools to think through both the technical and business sides of the problem.

I''ll share updates as we progress!',
  'A student shares their experience building a startup project in the M.E.T. program, covering both engineering and business aspects.',
  '22d0ddd3-f583-4480-be59-7a6910517933',
  'published',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  NOW(),
  NOW(),
  NOW()
);

-- Note: After running this, you may want to assign categories to these posts
-- Example (uncomment and adjust category IDs as needed):
-- INSERT INTO public.post_categories (post_id, category_id)
-- SELECT p.id, c.id
-- FROM public.posts p, public.categories c
-- WHERE p.slug IN ('welcome-to-discover-met', 'my-first-week-in-met', 'building-my-first-met-project')
-- AND c.slug = 'student-life';


