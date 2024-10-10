'use client'
import { signIn, signOut } from 'next-auth/react'

export default function Home() {
  return (
    <>
      <button
        className='bg-emerald-500 mr-2 p-1'
        onClick={() => signIn('github', { redirectTo: '/dashboard' })}
      >
        Sign In
      </button>
      <button className='bg-red-500 p-1' onClick={() => signOut()}>
        Sign Out
      </button>
    </>
  )
}
