export default function CreateClass () {
  return (
    <div className='bg-transparent w-full h-screen absolute z-20 text-black flex items-center justify-center'>
      <div className='bg-slate-400 p-4 rounded-md'>
        <form
          action='/api/classes'
          method='post'
          className='flex flex-col gap-10'
        >
          <label htmlFor='name' className='flex flex-col text-2xl gap-2'>
            Class Name
            <input
              type='text'
              name='name'
              id='name'
              className=' text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
          <button className='bg-white rounded-sm text-lg'>Create Class</button>
        </form>
      </div>
    </div>
  );
}
