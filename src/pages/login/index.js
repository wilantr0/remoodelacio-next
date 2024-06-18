import LogIn from '@components/log/LoginPage';
import { Montserrat } from 'next/font/google';
import estilos from '../../components/log/style';

export const montserrat = Montserrat({ subsets: ['latin'] });

export default function Login () {
  return (
    <div className='m-0 p-0 box-border bg-[#f1f0f1] flex justify-center items-center flex-col h-screen -mt-5 mx-0 mb-12'>
      <style>{estilos}</style>
      <LogIn />
    </div>
  );
}
