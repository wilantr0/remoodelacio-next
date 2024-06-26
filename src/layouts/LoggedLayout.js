import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head.js';

export default function LoggedLayout ({ title, children }) {
  title = title ? `${title} | Remoodelacio` : 'Remoodelacio';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header class='text-primary-foreground py-4 px-6 flex items-center justify-between border-b border-solid border-black'>
        <div class='flex items-center gap-4'>
          <a class='text-xl font-bold' href='#'>
            Classroom
          </a>
          <nav class='hidden md:flex items-center gap-4'>
            <a
              class='text-sm font-medium hover:underline underline-offset-4'
              href='#'
            >
              All Classes
            </a>
            <button class='inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium'>
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
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
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
      <main className='m-8'>{children}</main>
    </>
  );
}
