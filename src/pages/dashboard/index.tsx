import { auth } from 'auth'

export default async function DashboardPage () {
  const session = await auth()

  if (!session) {
    return <div>Not authenticated</div>
  }

  return (
    <div className='container'>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
