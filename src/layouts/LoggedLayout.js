import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head.js'
import { useState } from 'react'
import CreateClass from '../components/createClass'
import NavBar from '@components/LoggedNavBar'

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
      <NavBar />
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
