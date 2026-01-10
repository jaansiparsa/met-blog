-- Step 2: Set 'viewer' as the default role
-- Run this AFTER migration 002 has completed successfully

-- Change default role from 'student' to 'viewer' for new users
ALTER TABLE public.users ALTER COLUMN role SET DEFAULT 'viewer';

-- Update the function that creates user profiles on signup to use 'viewer' as default
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
    'viewer'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


