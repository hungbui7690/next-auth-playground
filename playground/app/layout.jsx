import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'App',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <nav>
          <Link className='text-blue-500' href='/'>
            Home
          </Link>
          <Link className='ml-2 text-blue-500' href='/dashboard'>
            Dashboard
          </Link>
        </nav>

        {children}
      </body>
    </html>
  )
}
