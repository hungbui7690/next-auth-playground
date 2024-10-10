/*
  Setup NextJS
  ~~ npx create-next-app@latest
    -> tailwind
    -> no "src"
    -> no "typescript"
    -> no "alias"


\\\\\\\\\\\\\\\\\\\\\\\\\

  Setup Supabase Auth w Github
  - Supabase OAuth Github: https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app
  - Supabase Session: https://supabase.com/docs/reference/javascript/initializing
  - pic

  ~~ npm install @supabase/supabase-js @supabase/ssr

  1. Supabase -> Dashboard -> New Project
    -> Settings -> API -> Project URL + Secret Key
  2. .env.local
    - NEXT_PUBLIC_SUPABASE_URL=
    - NEXT_PUBLIC_SUPABASE_ANON_KEY=
  3. Github -> Settings -> Developers -> Create New OAuth App
    -> url: http://localhost:3000
    -> callback url: get from Supabase -> Authentication -> Providers -> Github -> Callback URL
  4. app/page.jsx



*/
