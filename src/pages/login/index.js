import LogIn from '@components/log/LoginPage'
import { Montserrat } from 'next/font/google'
import estilos from '../../components/log/style'
import { useEffect, useState } from 'react'

export async function getServerSideProps (context) {
  console.log(context.query.st)
  return {
    props: {
      path: context.query.st
    }
  }
}

export const montserrat = Montserrat({ subsets: ['latin'] })

export default function Login ({ path }) {
  const [login, setLogin] = useState(null)
  useEffect(() => {
    if (path === 'tr') {
      setLogin('')
    } else if (path === 'fl') {
      setLogin('right-panel-active')
    } else {
      setLogin('')
    }
  }, [path])
  console.log(login)
  return (
    <div className='m-0 p-0 box-border bg-[#f1f0f1] flex justify-center items-center flex-col h-screen -mt-5 mx-0 mb-12'>
      <style>{estilos}</style>
      <LogIn page={login} />
    </div>
  )
}
