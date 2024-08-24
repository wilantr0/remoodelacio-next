import MainLayout from '../layouts/LlogedLayout'

export default function LoggedPage () {
  return (
    <MainLayout title='Home'>
      <form action='/api/ping' method='get' className='bg-orange-400'>
        <input type='text' name='name' id='name' />
        <input type='password' name='password' id='password' />
        <input type='submit' value='enviar' />
      </form>
    </MainLayout>
  )
}
