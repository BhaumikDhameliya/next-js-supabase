import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://nztebjeeiunsfaeyzpfp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dGViamVlaXVuc2ZhZXl6cGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2MzMwNDksImV4cCI6MTk3NjIwOTA0OX0.8CZDWHNPHRpMiBM7tZeY_bWJthyVlOZI_gqrTE_9klQ"
);
