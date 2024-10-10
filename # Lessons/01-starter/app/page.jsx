'use client'

import { useState } from 'react'

export default function Home() {
  const [user, setUser] = useState()

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800'>
      Auth App
    </div>
  )
}
