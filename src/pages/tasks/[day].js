// pages/task/[day]/index.js
import { useRouter } from 'next/router'

export default function Task () {
  const router = useRouter()
  const { day } = router.query

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Crear Tarea</h1>
        <form action='#' method='post'>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='task'>
              Tarea para el día {day}
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='task' type='text' placeholder='Descripción de la tarea' />
          </div>
          <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
