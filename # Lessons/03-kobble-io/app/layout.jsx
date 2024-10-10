import { KobbleProvider } from '@kobbleio/next/server' // #
import './globals.css'

export const metadata = {
  title: 'App',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {/* # */}
        <KobbleProvider>{children}</KobbleProvider>
      </body>
    </html>
  )
}
