import React from 'react'
import CategoriesObjects from './mini/CategoriesObjects'


function Categories() {
  return (
    <div className='bg-green-50 rounded-3xl z-10 absolute w-7/12 m-3 top-24 h-full right-16'>
        <h1 className='text-center text-4xl '><u>Categories</u></h1>
        <div className='flex flex-row'>
        <CategoriesObjects color='red' title='Bussiness' icon="fa-regular fa-money-check-dollar" />
        <CategoriesObjects color='blue' title='Health' />
        <CategoriesObjects color='pink' title='Beauty' />
        </div>
        <div className='flex flex-row'>
        <CategoriesObjects color='yellow' title='Engineering' />
        <CategoriesObjects color='green' title='Agriculture' />
        <CategoriesObjects color='purple' title='Engineering' />
        </div>
        <div className='flex flex-row'>
        <CategoriesObjects color='cyan' title='Fishing' />
        <CategoriesObjects color='Orange' title='Poultry' />
        <CategoriesObjects color='black' title='Security' />
        </div>
        <div className='flex flex-row'>
        <CategoriesObjects color='lime' title='Teaching' />
        <CategoriesObjects color='teal' title='Coding' />
        <CategoriesObjects color='maroon' title='Courier' />
        </div>
    </div>
  )
}

export default Categories