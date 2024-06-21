// These styles apply to every route in the application
import { Rubik } from 'next/font/google';

export const rubik = Rubik({ subsets: ['latin'] });
import '../styles/globals.css';

export default function App ({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
