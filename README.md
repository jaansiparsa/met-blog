# Discover M.E.T. Platform

A Next.js blog platform for M.E.T. program students to share their perspectives and experiences, similar to the MIT Admissions blog.

## Features

- **Public Blog**: Browse published posts, filter by categories, view author profiles
- **Student Authors**: Students can create and manage their own blog posts
- **Admin Panel**: Full CMS for managing posts, categories, and users
- **Authentication**: Secure login/signup with role-based access control
- **Modern UI**: Clean, responsive design inspired by MIT Admissions blog

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Styling**: Tailwind CSS
- **Markdown**: react-markdown

## Gallery Setup

### Adding Images to Supabase Storage

1. **Create Storage Bucket** (one-time setup):
   - Go to your Supabase Dashboard → Storage
   - Click "New bucket"
   - Name: `gallery-images`
   - Check "Public bucket" (so images are publicly accessible)
   - Click "Create bucket"

2. **Set up Storage Policies** (run in SQL Editor):
   - Run the SQL from `supabase/setup_gallery_storage.sql` in your Supabase SQL Editor
   - This allows public read access and admin-only uploads

3. **Upload Images**:
   - Go to Storage → `gallery-images` bucket
   - Click "Upload file" or drag and drop images
   - After uploading, click on each image to get its Public URL
   - The URL format will be: `https://[your-project-ref].supabase.co/storage/v1/object/public/gallery-images/[filename]`

4. **Add Gallery Items to Database**:
   - Go to Table Editor → `gallery_items` table
   - Click "Insert row" and fill in:
     - `image_url`: The Public URL from step 3
     - `date`: Date of the photo (YYYY-MM-DD format)
     - `description`: Optional description text
     - `display_order`: Number for sorting (lower numbers appear first)
   - Or use the SQL Editor with the format in `supabase/seed_gallery_example.sql`

## Setup Instructions

### 1. Prerequisites

- Node.js 18+ installed
- A Supabase account and project

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the migration files in order:
   - `supabase/migrations/001_initial_schema.sql`
   - `supabase/migrations/002_add_viewer_role.sql` (wait for this to complete)
   - `supabase/migrations/003_set_viewer_as_default.sql` (run after 002 completes)
3. Go to Authentication > Settings and enable Email provider
4. Copy your project URL and anon key from Settings > API

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

- **users**: User profiles (extends Supabase auth.users)
- **posts**: Blog posts with title, subtitle, content, status, etc.
- **categories**: Post categories
- **post_categories**: Many-to-many relationship between posts and categories

## User Roles

- **viewer**: Can read published posts and comment (comments feature coming soon)
- **student**: Can create and edit their own posts
- **admin**: Full access to all posts, categories, and user management

**Note**: New users default to `viewer` role. To change a user's role, update it in the Supabase database:
```sql
UPDATE public.users SET role = 'viewer' WHERE id = 'user-uuid-here';
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

The app will automatically use the Supabase database you configured.

## Usage

1. **Sign Up**: Create an account at `/auth/signup` (defaults to student role)
2. **Login**: Access the admin panel at `/admin`
3. **Create Posts**: Navigate to Admin > New Post
4. **Manage Categories**: Create categories in Admin > Categories
5. **View Blog**: Published posts appear on the homepage and `/blogs`

## Notes

- First user should be manually promoted to admin in Supabase database
- Posts can be saved as drafts before publishing
- Categories must be created before assigning them to posts
- Markdown is supported in post content
