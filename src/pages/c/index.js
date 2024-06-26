import { useState } from 'react'
import CreateClass from '../../components/createClass'
export default function Classes ({ clases }) {
  const [showCreate, setShowCreate] = useState(false)

  console.log(clases)
  const handleDataFromChild = data => {
    setShowCreate(data)
  }

  return (
    <div className='flex flex-col h-screen'>
      <header className='bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between text-white bg-black'>
        <div className='flex items-center gap-4'>
          <a className='text-xl font-bold' href='#'>
            Classroom
          </a>
          <nav className='hidden md:flex items-center gap-4'>
            <a
              className='text-sm font-medium hover:underline underline-offset-4'
              href=''
            >
              All Classes
            </a>
            <button
              onClick={() => setShowCreate(true)}
              className='inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium'
            >
              Create Class
            </button>
          </nav>
        </div>
        <div className='flex items-center gap-4'>
          <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-5 w-5'
            >
              <path d='M5 12h14' />
              <path d='M12 5v14' />
            </svg>
            <span className='sr-only'>Create Class</span>
          </button>
          <span className='relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border'>
            <img
              className='aspect-square h-full w-full'
              alt='@username'
              src='/placeholder-user.jpg'
            />
          </span>
        </div>
      </header>
      <main className='flex-1 bg-background p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            clases.map((e) => {
              const [teacherName, setTeacherName] = useState('')
              getTeacher(e.teacher).then(e => { setTeacherName(e) })
              return (
                <a
                  key={e.id}
                  href={`/c/${e.id}`}
                  class='rounded-lg border bg-card text-card-foreground shadow-lg'
                  data-v0-t='card'
                >
                  <div class='p-6'>
                    <div class='flex items-center justify-between'>
                      <h3 class='text-lg font-bold'>{e.name}</h3>
                    </div>
                    <p class='text-muted-foreground'>{teacherName}</p>
                  </div>
                  <div class='flex items-center p-6'>
                    <button class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full'>
                      View Class
                    </button>
                  </div>
                </a>
              )
            })
          }
        </div>
      </main>
      {showCreate
        ? (
          <CreateClass sendDataToParent={handleDataFromChild} />
          )
        : (
          <h1>Nada</h1>
          )}
    </div>
  )
}

export async function getServerSideProps () {
  const res = await fetch('http://localhost:3000/api/classes')
  const clases = await res.json()

  return { props: { clases } }
}

async function getTeacher (username) {
  const res = await fetch('http://localhost:3000/api/users')
  const users = await res.json()

  console.log(users)

  const user = users.map(({ id, name }) => {
    return id === username ? name : ''
  })

  console.log(user)
  return user
}
