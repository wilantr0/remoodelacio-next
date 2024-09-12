'use client'
import { useState, useEffect } from 'react'
import LoggedPage from './Logged'
import NotLoggedPage from './notLogged'

export const metadata = {
  title: 'About'
}

export default function Main () {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    // El acceso a localStorage solo ocurre en el cliente
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token') // Intentar obtener el token del almacenamiento local
      if (token) {
        // Llamar a la API para verificar el token si existe
        fetch('/api/auth/verify', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(data => {
            if (data.user) {
              setLogged(true) // Token válido, el usuario está autenticado
            } else {
              setLogged(false) // Token inválido, no autenticado
            }
          })
          .catch(error => {
            console.error('Error al verificar el token:', error)
            setLogged(false)
          })
      } else {
        setLogged(false) // Si no hay token, marcar como no autenticado
      }
    }
  }, [])

  return (
    <>
      <button
        onClick={() => {
          if (logged) {
            localStorage.removeItem('token') // Cerrar sesión, eliminando el token
            setLogged(false)
          } else {
            // Lógica para iniciar sesión, obtén el token y guárdalo en localStorage
            const token = 'mi_token_generado'
            localStorage.setItem('token', token)
            setLogged(true)
          }
        }}
      >
        {logged ? 'LogOut' : 'Log In'}
      </button>
      {logged ? <LoggedPage /> : <NotLoggedPage />}
    </>
  )
}
