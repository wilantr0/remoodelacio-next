export default function NavBar () {
  return (
    <div className='container mx-auto px-4 min-w-full'>
      <header className='flex items-center justify-between py-3 mb-4 border-b'>
        {/* Logo Section */}
        <div className='flex-shrink-0'>
          <a
            href='/'
            className='flex items-center text-gray-900 hover:text-gray-700'
          >
            <img src='/logoN.png' alt='insti logo' width={48} height={48} />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className='flex items-center flex-row space-x-6'>
          <li>
            <a
              id='clases'
              href='/c'
              className='text-gray-900 hover:text-gray-700 px-3 py-2 rounded decoration-transparent'
            >
              Clases
            </a>
          </li>
          <li>
            <a
              id='agenda'
              href='/calendar'
              className='text-gray-900 hover:text-gray-700 px-3 py-2 rounded decoration-transparent'
            >
              Agenda
            </a>
          </li>
          <li>
            <a
              id='assistance'
              href='/assistance'
              className='text-gray-900 hover:text-gray-700 px-3 py-2 rounded decoration-transparent'
            >
              Asistencia
            </a>
          </li>
          <li>
            <a
              id='bloc'
              href='/bloc'
              className='text-gray-900 hover:text-gray-700 px-3 py-2 rounded decoration-transparent'
            >
              Bloc
            </a>
          </li>
        </ul>

        {/* User Profile Button */}
        <div className='flex-shrink-0'>
          <a href='/login'>
            <button className='p-2 border-2 border-black rounded-full flex items-center justify-center'>
              <img
                alt='user icon'
                src='/user-iconn.png'
                className='w-6 h-6'
              />
            </button>
          </a>
        </div>
      </header>
    </div>
  )
}
