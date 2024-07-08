import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head.js'
import { useState } from 'react'
import CreateClass from '../components/createClass'

export default function LoggedLayout ({ title, children }) {
  const handleDataFromChild = data => {
    setShowCreate(data)
    console.log(showCreate)
  }
  const [showCreate, setShowCreate] = useState(false)

  title = title ? `${title} | Remoodelacio` : 'Remoodelacio'
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className=' text-primary-foreground py-4 px-4 flex items-center justify-between text-white'>
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
                  className='nav-link px-2'
                >
                  Clases
                </a>
              </li>
              <li>
                <a
                  id='servicios'
                  href='/servicios'
                  className='nav-link px-2'
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  id='planes'
                  href='/planes'
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

            <div className='col-md-3 w-8 h-8 text-end'>
              <button className='rounded-full border-2 border-black '>
                <img
                  alt='@username'
                  src='/user-iconn.png'
                />
              </button>
            </div>
          </header>
        </div>

      </header>
      {showCreate
        ? (
          <CreateClass sendDataToParent={handleDataFromChild} />
          )
        : (
            ''
          )}
      <main className='m-8'>{children}</main>
    </>
  )
}
