'use client'

import {
  useAuth,
  SignedIn,
  SignedOut,
  LoginButton,
  LogoutButton,
} from '@kobbleio/next/client'
import Link from 'next/link'

export default function Home() {
  const { user } = useAuth()
  console.log(user)

  return (
    <div>
      <SignedIn>
        <Link className='text-blue-500' href='/dashboard'>
          Dashboard
        </Link>
        <p>Welcome, {user?.name}</p>
        <LogoutButton className='bg-rose-500 hover:bg-rose-700 px-4 py-2 rounded font-bold text-white' />
      </SignedIn>

      <SignedOut>
        <p>Not authenticated</p>
        <LoginButton className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white' />
      </SignedOut>
    </div>
  )
}
