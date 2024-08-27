import { useState } from 'react'
import { FaRegEyeSlash, FaRegEye, FaFacebook, FaGoogle } from 'react-icons/fa'
import { estilos } from './style'
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({ subsets: ['latin'] })

export default function Register () {
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')

  const togglePasswordVisibility = e => {
    e.preventDefault()
    setShowPass(!showPass)
  }

  const handleSignIn = async (event) => {
    event.preventDefault()
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name, role })
    })
    const data = await res.json()
    if (res.ok) {
      console.log(data)
    } else {
      // Maneja errores
    }
  }
  return (
    <section className='form-container sign-up-container'>
      <style>{estilos}</style>
      <form action='' className='' onSubmit={handleSignIn}>
        <h1>Crear cuenta</h1>
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
          className='input'
          type='text'
          placeholder='nombre'
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className='input'
          type='email'
          placeholder='e-mail'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className='password-container' style={{ width: '100%' }}>
          <input
            className='input'
            type={showPass ? 'text' : 'password'}
            placeholder='contraseña'
            value={password}
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            required
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
        <select onChange={(e) => setRole(e.target.value)} className='input' name='role' id='role'>
          <option value='teacher'>Profesor/a</option>
          <option value='alumn'>Alumno/a</option>
          <option value='admin'>Gestor/a</option>
        </select>
        <input type='submit' value='Sign up' />
      </form>
    </section>
  )
}
