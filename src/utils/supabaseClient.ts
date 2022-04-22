import { createClient } from '@supabase/supabase-js';

const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } = process.env;

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL || '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default supabase;
