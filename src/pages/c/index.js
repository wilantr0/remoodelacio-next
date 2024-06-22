import { useState } from 'react';
import ClassCard from '../../components/classCard';
import CreateClass from '../../components/createClass';
export default function Classes ({ tasks }) {
  const [showCreate, setShowCreate] = useState(false);
  console.log(tasks[0]);
  return (
    <div class='flex flex-col h-screen'>
      <header class='bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between text-white bg-black'>
        <div class='flex items-center gap-4'>
          <a class='text-xl font-bold' href='#'>
            Classroom
          </a>
          <nav class='hidden md:flex items-center gap-4'>
            <a
              class='text-sm font-medium hover:underline underline-offset-4'
              href=''
            >
              All Classes
            </a>
            <button
              onClick={() => setShowCreate(true)}
              class='inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium'
            >
              Create Class
            </button>
          </nav>
        </div>
        <div class='flex items-center gap-4'>
          <button class='inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium md:hidden'>
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
              class='h-5 w-5'
            >
              <path d='M5 12h14'></path>
              <path d='M12 5v14'></path>
            </svg>
            <span class='sr-only'>Create Class</span>
          </button>
          <span class='relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border'>
            <img
              class='aspect-square h-full w-full'
              alt='@username'
              src='/placeholder-user.jpg'
            />
          </span>
        </div>
      </header>
      <main class='flex-1 bg-background p-6'>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {tasks.map(e => {
            return (
              <ClassCard
                link={e.id}
                name={e.name}
                teacher={e.teacher}
                key={e}
              />
            );
          })}
        </div>
      </main>
      {showCreate ? <CreateClass /> : <h1>Nada</h1>}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/tasks');
  const tasks = await res.json();

  console.log(tasks[0]);

  return {
    props: {
      tasks
    }
  };
};
