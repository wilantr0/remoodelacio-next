import ClassLayout from '@layouts/ClassLayout.js';
import { useRouter } from 'next/router';

export default function Clase () {
  const router = useRouter();

  console.log(router.query);

  return (
    <ClassLayout title='q'>
      <h1>{router.query.clase}</h1>
    </ClassLayout>
  );
}
