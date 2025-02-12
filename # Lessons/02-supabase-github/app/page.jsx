'use client'

import { createBrowserClient } from '@supabase/ssr'
import { useEffect, useState } from 'react'

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// # LOGIN
async function signInWithGithub() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error) console.error('Error: ', error)

    console.log(data)
  } catch (error) {}
}

// # LOGOUT
async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) console.error('Error: ', error)
}

export default function Home() {
  const [user, setUser] = useState()

  // # SESSION
  useEffect(() => {
    // METHOD 1
    // async function getSession() {
    //   const { data } = await supabase.auth.getSession()
    //   if (data?.session) {
    //     setUser(data.session.user)
    //   } else {
    //     setUser(null)
    //   }
    // }
    // getSession()

    // METHOD 2
    const getUserSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data?.session) {
        setUser(data.session.user)
      }
    }

    getUserSession()
  }, [])

  console.log({ user })

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800'>
      <div className='p-6 bg-white dark:bg-gray-700 rounded shadow-md'>
        <h1 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
          GitHub Authentication
        </h1>
        <button
          onClick={signInWithGithub}
          className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-black dark:hover:bg-black mb-4'
        >
          Sign In with GitHub
        </button>
        <button
          onClick={async () => {
            await signOut()
            setUser(null)
          }}
          className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 dark:hover:bg-red-800'
        >
          Sign Out
        </button>
        <p>{user ? 'Signed In!' : 'Signed Out'}</p>
        <p>{user?.email}</p>
      </div>
    </div>
  )
}
