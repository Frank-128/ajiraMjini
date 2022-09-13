import React from 'react'

function Search() {
  return (
    <div style={{top:'106px'}} className='absolute left-1/3 w-1/3 z-1 flex flex-col z-30 items-center h-96 bg-slate-200'>
    <div className='w-full'>
    <input type='text' className='w-full  top-0 flex-1 border border-b-slate-600 border-o' placeholder='Find company name or job position ' />

    </div>
        <div className='rounded flex-2 p-1 m-1 flex-row bg-blue-500 w-full '>
      <span className='flex justify-around'>
      <img src='logo.png' className='w-12 h-12 rounded-full' alt='companylogo' />
        <span className='text-3xl text-white'>AjiraMjini</span>
      </span>
    </div>
    </div>
  )
}

export default Search