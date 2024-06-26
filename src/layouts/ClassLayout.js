import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head.js'
import ClassBreadCrumb from '../components/ClassBreadCrumb'

export default function ClassLayout ({ title, children, classId }) {
  title = title ? `${title} | Remoodelacio` : 'Remoodelacio'
  console.log(classId)
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className='flex flex-row justify-between items-center p-4 bg-blue-600'>
        <ClassBreadCrumb classItem={classId} />
      </header>
      <main className='m-8'>{children}</main>
    </>
  )
}
