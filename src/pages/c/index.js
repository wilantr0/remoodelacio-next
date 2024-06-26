import { useState } from 'react'
import CreateClass from '../../components/createClass'
import ClassCard from '../../components/classCard'
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
            clases.map(function clases (e) {
              return (
                <ClassCard classItem={e} key={e.id} />
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

async function fetchAllClasses () {
  const res = await fetch('http://localhost:3000/api/classes')
  const data = await res.json()
  return data
}

export async function getServerSideProps () {
  const clases = await fetchAllClasses()

  return {
    props: {
      clases
    }
  }
}
