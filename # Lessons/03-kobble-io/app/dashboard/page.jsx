import { getAuth } from '@kobbleio/next/server'

export default async function Dashboard() {
  const session = await getAuth() // # not useAuth()

  console.log({ session })

  return <h2>Dashboard Route</h2>
}
