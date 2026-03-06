-- New article: How I Touch Grass at Berkeley (author: 22d0ddd3-f583-4480-be59-7a6910517933)
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
  'How I Touch Grass at Berkeley',
  'Life at Berkeley',
  'how-i-touch-grass-at-berkeley',
  '# How I Touch Grass at Berkeley

I think as a UC Berkeley student there''s this big perception that we are permanently locked in. Like headphones-on, head-down, and a midterm every week. And I mean sometimes that''s true. But the idea that we''re all competitive and not social (especially in M.E.T.) could not be further from the truth.

Everyone here has their niches. And being at such a big school means you get to find the people who match yours. And honestly my niche these past couple of months has been being outdoors as much as humanly possible.

Growing up in Chicago, December through March basically took outdoor activities off the table. The cold would humble you immediately. But here? The weather enables you to (for lack of better words) literally touch more grass.

So without further ado, here are the ways I''ve been touching grass at Berkeley (in no particular order).

## 1. Hanging Out on the Glade

This one feels obvious, but it deserves its flowers. Being on the Glade during peak sun hours (or even better, sunset) is actually unreal. It truly just screams college experience but trust it''s really nice.

My Favorite Glade activities:

- Spikeball
- Power naps
- Picnics with Trader Joe''s snacks
- VERY occasional reading

## 2. Hikes and Backpacking

Berkeley has its "pillar hikes" like Big C and the Fire Trails which are basically a rite of passage. But weekends are when you really have time to venture out.

Mt. Tamalpais and Point Reyes are genuinely so beautiful. I love just going out with a few friends, packing sandwiches, and eating them at the top of the hike. It''s a great day trip or even weekend if you want to camp/backpack!

Pro tip: join CHAOS hiking club. Cheap gear rentals and random trips you can join! Some of the coolest people I''ve met have been on random hikes.

![Hikes and Backpacking](https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/post-images/Screenshot%202026-03-05%20at%207.53.49%20PM.png)

## 3. Climbing

Mosaic is so nice. I resisted buying a membership in first semester, but I caved this semester. Also, shoutout to my friend who used his guest pass to swipe me into Benchmark. That gym is gorgeous but also painfully expensive. Also, if you leave at Blackwell your first year it''s so close to Mosaic!

## 4. Running

In all honesty, first semester I barely ran because I hate hills and Berkeley is basically one giant hill. But I missed running so much that I forced myself back into it and now I love it here.

This week I genuinely went on one of my top five runs ever. We started at Blackwell and ran all the way down to the Marina then grabbed Acai bowls after! Next on the bucket list is to do a Marina run during sunset.

## 5. Walking & Talking

This is so underrated. Some of my best conversations at Berkeley have happened while walking around campus, through Elmwood, and down Telegraph with genuinely no destination in mind. Elmwood is also a really pretty area to walk around and take photos of the scenery!

![Walking and Talking](https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/post-images/Screenshot%202026-03-05%20at%207.53.59%20PM.png)

And that''s my current outdoor rotation.

Some honorable mentions:

- Drop-in dance classes (in Berkeley + SF)
- Lifting at RSF (the queue to go into the weight room is definitely an experience)
- Snowboarding (sometimes can be a little expensive)

But I hope to see you touching grass too and if you see me on the Glade mid-power nap, no you didn''t.

P.S. follow me on Strava :)',
  'A UC Berkeley student shares how they stay outdoors—from the Glade to hikes, climbing, running, and more.',
  '22d0ddd3-f583-4480-be59-7a6910517933',
  'published',
  NOW(),
  NOW(),
  NOW(),
  'https://unvzqbkmnxxcmvtezcrk.supabase.co/storage/v1/object/public/post-images/Screenshot%202026-03-05%20at%207.53.49%20PM.png'
);
