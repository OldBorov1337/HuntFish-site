import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://blkymxzrnutigdllbqid.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsa3lteHpybnV0aWdkbGxicWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5Mjc2NDYsImV4cCI6MjAxMTUwMzY0Nn0.5CFtAHx4GS43S0qXlW91Ly3VAFLhMWCZj8XiIi_V68c';

const supabase = createClient(supabaseURL, supabaseKey);

export {supabase};