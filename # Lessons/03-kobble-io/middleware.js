import { authMiddleware } from '@kobbleio/next/server'

export default authMiddleware({
  publicRoutes: ['/'], // /dashboard is not in this list -> need to login to access /dashboard
})

export const config = {
  matcher: [
    // exclude internal Next.js routes
    '/((?!.+\\.[\\w]+$|_next).*)',
    // reinclude api routes
    '/(api|trpc)(.*)',
  ],
}
