-- Step 1: Add 'viewer' role to the user_role enum
-- This must be run first and committed before Step 2
ALTER TYPE user_role ADD VALUE 'viewer';
