// These styles apply to every route in the application
import { Rubik } from 'next/font/google'
import '../styles/globals.css'

export const rubik = Rubik({ subsets: ['latin'] })

export default function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}
