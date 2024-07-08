export default function NavBar (id) {
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
              id='home'
              href='/'
              className={`nav-link px-2 ${
                id === 'home' ? 'link-secondary' : ''
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              id='servicios'
              href='/servicios'
              className={`nav-link px-2 ${
                id === 'servicios' ? 'link-secondary' : ''
              }`}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              id='planes'
              href='/planes'
              className={`nav-link px-2 ${
                id === 'planes' ? 'link-secondary' : ''
              }`}
            >
              Planes
            </a>
          </li>
          <li>
            <a
              id='about'
              href='/about'
              className={`nav-link px-2 ${
                id === 'about' ? 'link-secondary' : ''
              }`}
            >
              Sobre Nosotros
            </a>
          </li>
        </ul>

        <div className='col-md-3 text-end'>
          <a href='/login'>
            <button type='button' className='btn btn-outline-primary me-2'>
              Login
            </button>
          </a>

          <a className='decoration-transparent' href='/login'>
            <button type='button' className='btn btn-primary'>
              Sign-up
            </button>
          </a>
        </div>
      </header>
    </div>
  )
}
