// pages/404.js
import Image from 'next/image'

export default function Custom404 () {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white'>
      <div className='w-full lg:w-1/2 text-center lg:text-center p-6'>
        <h1 className='text-6xl font-extrabold text-indigo-600'>404</h1>
        <h2 className='mt-4 text-3xl font-bold text-gray-900'>Page Not Found</h2>
        <p className='mt-2 text-lg text-gray-600'>Sorry, we couldn’t find the page you’re looking for.</p>
        <a href='/' className='mt-6 inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'>
          Go back home
        </a>
      </div>
      <div className='hidden lg:flex w-full lg:w-1/2 justify-center p-6'>
        <Image
          src='/claseAntigua.jpg'
          alt='404 Image'
          width={500}
          height={500}
          className='max-w-full h-auto'
        />
      </div>
    </div>
  )
}
