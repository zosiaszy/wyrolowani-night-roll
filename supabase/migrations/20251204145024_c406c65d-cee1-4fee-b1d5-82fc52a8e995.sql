-- Drop the contact_messages table and its policies
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Authenticated users can view messages" ON public.contact_messages;
DROP TABLE IF EXISTS public.contact_messages;