import React, { useState, useEffect } from 'react'

async function fetchUserData (userId) {
  const res = await fetch(`http://localhost:3000/api/users/${userId}`)
  const data = await res.json()
  return data
}

const ClassCard = ({ classItem }) => {
  const [teacherData, setTeacherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  console.log(classItem)

  useEffect(() => {
    async function fetchData () {
      try {
        setLoading(true)
        console.log(classItem.teacher)
        const teacherData = await fetchUserData(classItem.teacher)
        setTeacherData(teacherData)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    fetchData()
  }, [classItem.teacher])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <a
      key={classItem.id}
      href={`/c/${classItem.id}`}
      class='rounded-lg border bg-card text-black decoration-transparent text-card-foreground shadow-lg'
      data-v0-t='card'
    >
      <div class='p-6'>
        <div class='flex items-center justify-between'>
          <h3 class='text-lg font-bold'>{classItem.name}</h3>
        </div>
        <p class='text-muted-foreground'>{teacherData[0].name}</p>
      </div>
      <div class='flex items-center p-6'>
        <button class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full'>
          View Class
        </button>
      </div>
    </a>
  )
}

export default ClassCard
