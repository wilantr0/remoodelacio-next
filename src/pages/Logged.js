import LoggedLayout from '../layouts/LoggedLayout';

export default function LoggedPage () {
  return (
    <LoggedLayout title='Home'>
      <form action='/api/ping' method='get' className='bg-orange-400'>
        <input type='text' name='name' id='name' />
        <input type='password' name='password' id='password' />
        <input type='submit' value='enviar' />
      </form>
    </LoggedLayout>
  );
}
