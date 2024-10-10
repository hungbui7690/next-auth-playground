/*
  Kobble
  - Setup Google OAuth: https://docs.kobble.io/product/authentication/social/google
  - Setup Github OAuth: https://docs.kobble.io/product/authentication/social/github
  - Setup Auth NextJS : https://docs.kobble.io/learning/quickstart/next
  ~~ npm install @kobbleio/next


\\\\\\\\\\\\\\\\\\\\\\\\\

  1. kobble.io
    -> create new project
    -> get keys
    -> enable Magic Link (Email) + Google + Github
  2. .env.local
    KOBBLE_CLIENT_SECRET=your-client-secret
    NEXT_PUBLIC_KOBBLE_CLIENT_ID=your-client-id
    NEXT_PUBLIC_KOBBLE_DOMAIN=your-domain-url
    NEXT_PUBLIC_KOBBLE_REDIRECT_URI=http://localhost:3000/callback
  3. root/middleware.js 
    -> code from docs
  3. app/layout.js
    -> wrapper for all pages
  4. app/page.js
    -> code from docs


\\\\\\\\\\\\\\\\\\\\\\\\\

  🌲 Error -> check: 
    # callback url in OAuth App
    # redirect_url in kobble and .env


\\\\\\\\\\\\\\\\\\\\\\\\\

  Authorized Redirect URI
  - It is the callback URL that should be given while registering your app. 
  - This callback URL determines where the API server has to redirect the user after completing the authorization flow. 
  - The value of this parameter must exactly match with one of the redirect_uri values that is listed for your project in the Google Developer Console.



*/
