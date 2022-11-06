import { createClient } from "@supabase/supabase-js";

console.log(process.env.SUPABASE_KEY);
const supabaseUrl = "https://eydrjrpkgvsolsqggwkv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5ZHJqcnBrZ3Zzb2xzcWdnd2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1NjMzNTAsImV4cCI6MTk4MjEzOTM1MH0.k-2lW5bjJYGlYaLWzyHdb5jNrJR6uvpelDDkqg3OJzM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
