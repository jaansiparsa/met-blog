-- New article: My CalHacks Experience (author: 22d0ddd3-f583-4480-be59-7a6910517933)
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
  'My CalHacks Experience',
  'Cal Hacks',
  'my-calhacks-experience',
  '# My CalHacks Experience

![My CalHacks Experience](https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/post-images/Screenshot%202026-03-05%20at%208.06.31%20PM.png)

When I joined Cal Hacks (the world''s biggest college hackathon), I had no team, no idea, nothing.

As a first-year in Berkeley''s M.E.T. program studying EECS and Business, I should have felt ready. I''m surrounded by some of the smartest, most technical, most cracked builders I''ve ever met.

But here''s the honest truth: I wasn''t.

I''d been to hackathons before (with two other M.E.T. teams) and if I''m being real, I barely contributed to the technical build. I was the "networking and free-swag hoarder." The vibes-only member. My peers were incredibly patient. They explained things. They let me shadow their coding. They never made me feel small. But internally? I felt behind.

This time, something shifted. I walked into Cal Hacks without a team. So I did what any sane person would do: I formed one on the spot. I met an MET sophomore, who helped me form a team with her and 2 others. All first-time hackers. I pitched an idea that had been rotting in my Notes app for months, which they loved! And soon we were shipping an AI-powered unified inbox that could extract tasks, deadlines, and priorities across platforms, and called it Calendera.

## Night 1

We decided on specs. Split responsibilities. Spun up our MVP skeletons over an unreasonable amount of matcha (the real hackathon MVP).

By 3 AM, my brain was running on caffeine and delusion.

But for the first time ever at a hackathon, I wasn''t hovering. I wasn''t just watching. My code editor was open. Agent frameworks were loading.

## Day 2

Day two was pure hackathon chaos. Everyone locked in, and I took on the backend. I was learning in real time. Googling. Asking questions. Breaking things. Fixing them. Pair-debugging. Actually understanding why something worked instead of just copy-pasting Claude Code answers.

And that''s what changed everything.

Hackathons compress growth. You learn in 36 hours what might take weeks in class. Not because it''s structured (or just GPT), but because it''s messy, high-stakes, and deeply collaborative.

## Day 3

Twelve hours left. Half our features are broken. Three hours of sleep. At some point, I became the "content creator." We stitched together a quick demo for Calendera and hit submit in the final hour.

We had zero expectations. During the awards, one of my teammates was literally napping. Then I heard it: "Calendera." We froze. Wait. What? We won Best Use of AI by MLH Hacks and Reach Capital. Cue disbelief. Awkward celebratory high-fives. Me fully screaming, "NO WAY THIS JUST HAPPENED."

Being in M.E.T. shaped this experience more than I realized. The program constantly pushes us to think at the intersection of technology and business. Not just:

Can you build it?

But

Should you build it?

Who is it for?

What problem are you actually solving?

How does this scale?

When we were defining our product vision, my business training kicked in. When we were debugging backend agents, my EECS side was growing in real time.

My success at Calhacks definitely had an impact on my confidence. I had a great experience. Hence, I would implore you to definitely apply to the next edition of calhacks or join their hackathon! At calhacks, you learn what kind of problems excite you. (I realized I love building intelligent systems that make messy human workflows simpler.) It is a great way to make friends and learn under pressure.

![CalHacks friends](https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/post-images/Screenshot%202026-03-05%20at%208.06.41%20PM.png)

You''ll meet people who teach you. You''ll fail publicly. You''ll build things that break. And occasionally, you''ll build something that surprises even you.

See you at the next one. 💛',
  'Going to Cal Hacks with no team and no idea—and leaving with Best Use of AI for Calendera, real backend skills, and a new kind of confidence.',
  '22d0ddd3-f583-4480-be59-7a6910517933',
  'published',
  NOW(),
  NOW(),
  NOW(),
  'https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/post-images/Screenshot%202026-03-05%20at%208.06.31%20PM.png'
);
