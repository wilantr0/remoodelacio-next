import BreadCrumb from '../../../../components/BreadCrumb.js';
//import EntregarTarea from '../../../../components/EntregarTarea.js';
import ClassLayout from '../../../../layouts/ClassLayout.js';
import { useRouter } from 'next/router';

export default async function Tarea () {
  const router = useRouter();

  const query = await router.query;

  console.log(query);

  return (
    <ClassLayout title='q'>
      <h1>Tarea</h1>
      <BreadCrumb />
    </ClassLayout>
  );
}
