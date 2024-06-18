import 'bootstrap/dist/css/bootstrap.css'
import NavBar from '../components/NavBar.js'
import Head from 'next/head.js'

export default function MainLayout ({ id, title, children }) {
  title = title ? `${title} | Remoodelacio` : 'Remoodelacio'
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar id={id} />
      <main className='m-8'>{children}</main>
    </>
  )
}
