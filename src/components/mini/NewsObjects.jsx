import React from 'react'

function NewsObjects(props) {
  return (
    <div className='m-3 rounded-lg h-1/3 bg-blue-400 '>
    <span>{props.name}</span>
    <div className='border-t-4 border-indigo-500 w-full h-32'>
    <p>This is a random text to show that there is some News
        which will take place
        </p>
    </div>
       

    </div>
  )
}

export default NewsObjects