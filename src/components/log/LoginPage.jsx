import Login from './Login';
import Register from './Register';
import { useState } from 'react';
import estilos from './style';

export default function LogIn () {
  const [card, setCard] = useState('');
  console.log(estilos);
  return (
    <>
      <style>{estilos}</style>
      <div className='relative'>
        <a href='/'>
          <span className='rounded-full bg-white px-3 py-2 absolute z-20 -top-3 -right-3 text-blue-600 border border-blue-600'>
            ✖
          </span>
        </a>

        <div className={`container ${card}  z-0`} id='container'>
          <Login />
          <Register />
          <div className='overlay-container'>
            <div className='overlay'>
              <div className='overlay-panel overlay-left'>
                <h1>Una nueva aventura?</h1>
                <p>Registrate para llegar a donde quieras</p>
                <button onClick={() => setCard('')} id='logIn'>
                  Iniciar sesión
                </button>
              </div>
              <div className='overlay-panel overlay-right'>
                <h1>Bienvenido de nuevo</h1>
                <p>Inicia sesión para acceder a todo tu contenido</p>
                <button
                  onClick={() => setCard('right-panel-active')}
                  id='signIn'
                >
                  Registrarme
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
