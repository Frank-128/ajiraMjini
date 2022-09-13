import React from 'react'
import NewsObjects from './mini/NewsObjects'

function News() {
  return (
    <div className=' overflow-scroll  absolute top-32 m-3 -mt-5 rounded w-1/3 h-full bg-orange-100 '>
        
            <h1 className='text-center text-3xl'>News</h1>
        <NewsObjects name='Vodacom'/>
        <NewsObjects name='Simbanet'/>
        <NewsObjects name='Rico Mtu Kazi'/>
        <NewsObjects name='Tanzanite Park'/>
    </div>
  )
}

export default News