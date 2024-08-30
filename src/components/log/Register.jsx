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
  const [role, setRole] = useState('teacher')

  const togglePasswordVisibility = () => {
    setShowPass((prevShowPass) => !prevShowPass)
  }

  const handleSignUp = async (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    console.log(data)

    console.log(name)
    console.log(role)
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, role })
      })

      const data = await res.json()
      if (res.ok) {
        console.log('Usuario registrado exitosamente:', data)
        // You can redirect or give feedback to the user here
      } else {
        console.error('Error al registrar el usuario:', data.error)
      }
    } catch (error) {
      console.error('Error de red u otro error:', error)
    }
  }

  return (
    <section className='form-container sign-up-container'>
      <style>{estilos}</style>
      <form action='' onSubmit={handleSignUp}>
        <h1>Crear cuenta</h1>
        <div className='social-container'>
          <a className='social-login' href='#'>
            <FaFacebook />
          </a>
          <a className='social-login' href='#'>
            <FaGoogle />
          </a>
        </div>
        <span>o utiliza tu mail</span>
        <input
          className='input'
          type='text'
          placeholder='Nombre'
          name='name'
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className='input'
          type='email'
          name='mail'
          placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className='password-container' style={{ width: '100%' }}>
          <input
            className='input'
            type={showPass ? 'text' : 'password'}
            placeholder='Contraseña'
            value={password}
            id='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%' }}
          />
          <button
            type='button'
            id='showPassword'
            onClick={togglePasswordVisibility}
            aria-label={showPass ? 'Hide password' : 'Show password'}
            className='show-password-button'
          >
            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
        <select onChange={(e) => setRole(e.target.value)} className='input' name='role' id='role'>
          <option value='teacher'>Profesor/a</option>
          <option value='alumn'>Alumno/a</option>
          <option value='super'>Gestor/a</option>
        </select>
        <input type='submit' value='Sign up' />
      </form>
    </section>
  )
}
