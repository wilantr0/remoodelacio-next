import { useState } from 'react';
import { FaRegEyeSlash, FaRegEye, FaFacebook, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { estilos } from './style';
import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });

export default function Login () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = e => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <section className='form-container sign-in-container'>
      <style>{estilos}</style>
      <form
        action=''
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white flex justify-center items-center flex-col py-0 px-12 h-full text-center'
      >
        <h1>Iniciar sesión</h1>
        <div className='social-container'>
          <a className='social-login' href=''>
            <FaFacebook />
          </a>
          <a className='social-login' href=''>
            <FaGoogle />
          </a>
        </div>
        <span>o utiliza tu mail</span>
        <input
          {...register('mail', { required: true })}
          className='input'
          type='email'
          placeholder='e-mail'
          style={{ width: '100%' }}
        />
        <span className=' text-xs text-red-800'>
          {errors?.password?.type === 'required' && 'El correo es obligatorio'}
        </span>
        <div className='password-container' style={{ width: '100%' }}>
          <input
            {...register('password', { required: true, minLength: 8 })}
            className='input'
            type={showPass ? 'text' : 'password'}
            placeholder='contraseña'
            value={password}
            id='password'
            onChange={handlePasswordChange}
            style={{ width: '100%' }}
          />
          <span className='show-password-checkbox'>
            <button id='showPassword' onClick={togglePasswordVisibility}>
              <label htmlFor='showPassword'>
                {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
              </label>
            </button>
          </span>
        </div>
        <span className=' text-xs text-red-800'>
          {errors?.password?.type === 'minLength' &&
            'La contraseña debe tener minimo 8 caracteres'}
        </span>
        <span className=' text-xs text-red-800'>
          {errors?.password?.type === 'required' &&
            'La contraseña es obligatoria'}
        </span>
        <input type='submit' value='Log in' />
      </form>
    </section>
  );
}
