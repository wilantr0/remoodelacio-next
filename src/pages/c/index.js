import ClassCard from '../../components/classCard'
import LoggedLayout from '../../layouts/LoggedLayout'
export default function Classes ({ clases }) {
  console.log(clases)

  return (
    <div className='flex flex-col h-screen'>
      <LoggedLayout title='Clases' />
      <main className='flex-1 bg-background p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            clases.map(function clases (e) {
              return (
                <ClassCard classItem={e} key={e.id} />
              )
            })
          }
        </div>
      </main>

    </div>
  )
}

async function fetchAllClasses () {
  const res = await fetch('http://localhost:3000/api/classes')
  const data = await res.json()
  return data
}

export async function getServerSideProps () {
  const clases = await fetchAllClasses()

  return {
    props: {
      clases
    }
  }
}
