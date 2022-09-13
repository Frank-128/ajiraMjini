import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CategoriesObjects(props) {
   
  return (
    <div style={{backgroundColor:`${props.color}`}} className='w-1/3 h-24 align-baseline text-4xl pt-4 text-white text-center hover:w-96 hover:opacity-50 hover:cursor-pointer rounded-lg m-5'>
        <span>{props.title}</span>
        <span><FontAwesomeIcon icon="" /></span>
    </div>
  )
}

export default CategoriesObjects