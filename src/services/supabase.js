
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://kykxpdenpbwrdpdbpmcm.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

console.log(process.env);

export default supabase