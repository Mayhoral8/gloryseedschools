import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://kykxpdenpbwrdpdbpmcm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5a3hwZGVucGJ3cmRwZGJwbWNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NTQ0NDAsImV4cCI6MjA0NDEzMDQ0MH0.2mtz_-2sMCGjV8Bo7WNKlkbwlgIp3d6ZjYBZOmWfm60"
const supabase = createClient(supabaseUrl, supabaseKey)

console.log(process.env);

export default supabase