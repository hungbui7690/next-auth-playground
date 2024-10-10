'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Dashboard() {
  const { data: session } = useSession()
  console.log(session)

  return (
    <>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={100}
        height={100}
        className='rounded-full'
      />
    </>
  )
}
