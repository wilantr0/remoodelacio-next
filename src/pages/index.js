import { useState } from 'react';
import LoggedPage from './Logged';
import NotLoggedPage from './notLoged';

export const metadata = {
  title: 'About'
};

export default function Planes () {
  const [logged, setLogged] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setLogged(!logged);
        }}
      >
        {logged ? 'LogOut' : 'Log In'}
      </button>
      {logged ? <LoggedPage /> : <NotLoggedPage />}
    </>
  );
}
