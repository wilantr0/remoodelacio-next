// pages/index.js

import Calendar from '../../components/calendar'
import LoggedLayout from '../../layouts/LoggedLayout'

export default function Home () {
  return (
    <LoggedLayout>
      <div className='flex items-center justify-center min-w-full min-h-screen'>
        <Calendar />
      </div>
    </LoggedLayout>
  )
}
