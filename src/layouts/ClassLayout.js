import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head.js'

export default function ClassLayout ({ title, children }) {
  title = title ? `${title} | Remoodelacio` : 'Remoodelacio'
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='m-8'>{children}</main>
    </>
  )
}
