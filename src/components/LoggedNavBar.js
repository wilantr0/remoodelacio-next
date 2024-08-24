export default function NavBar () {
  return (
    <div className='container'>
      <header className='d-flex flex-wrap flex-row align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
        <div className='col-md-3 mb-2 mb-md-0 -mr-10'>
          <a
            href='/'
            className='d-inline-flex link-body-emphasis text-decoration-none'
          >
            <img src='/logo.jpg' alt='insti logo' width={68} height={60} />
          </a>
        </div>

        <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
          <li>
            <a
              id='clases'
              href='/c'
              className='nav-link px-2'
            >
              Clases
            </a>
          </li>
          <li>
            <a
              id='agenda'
              href='/calendar'
              className='nav-link px-2'
            >
              Agenda
            </a>
          </li>
          <li>
            <a
              id='notas'
              href='/marks'
              className='nav-link px-2'
            >
              Notas
            </a>
          </li>
          <li>
            <a
              id='about'
              href='/about'
              className='nav-link px-2'
            >
              Blog
            </a>
          </li>
        </ul>

        <div className='col-md-3 text-end'>
          <a href='/login'>
            <button className='rounded-full border-2 border-black '>
              <img
                alt='@username'
                src='/user-iconn.png'
              />
            </button>
          </a>

        </div>
      </header>
    </div>
  )
}
