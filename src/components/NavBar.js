import { Button } from '@/components/ui/button'

export default function NavBar () {
  return (

    <header className='px-4 lg:px-6 h-20 flex items-center border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <a className='flex items-center justify-center' href='#'>
          <img src='/logoN.png' alt='Logo' width={150} height={40} className='h-10 w-auto' />
        </a>
        <nav className='hidden md:flex space-x-8'>
          <a className='text-sm font-medium hover:text-blue-600 decoration-transparent' href='/'>Home</a>
          <a className='text-sm font-medium hover:text-blue-600 decoration-transparent' href='/servicios'>Servicios</a>
          <a className='text-sm font-medium hover:text-blue-600 decoration-transparent' href='/planes'>Planes</a>
          <a className='text-sm font-medium hover:text-blue-600 decoration-transparent' href='/about'>Sobre Nosotros</a>
        </nav>
        <div className='flex items-center space-x-4'>
          <Button variant='ghost'>Login</Button>
          <Button className='bg-blue-600 hover:bg-blue-700 text-white'>Sign-up</Button>
        </div>
      </div>
    </header>
  )
}
