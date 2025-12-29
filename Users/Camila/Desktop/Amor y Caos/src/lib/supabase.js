import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://avqcfefaershlcffzotw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2cWNmZWZhZXJzaGxjZmZ6b3R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1MTI5NzcsImV4cCI6MjA1MTA4ODk3N30.6RkYpetmpWtSCSKOZ1kr9g_vlhbVmfE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

