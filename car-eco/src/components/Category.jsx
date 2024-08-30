// eslint-disable-next-line no-unused-vars
import React from 'react'
import Data from "@/Shared/Data";
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className='mt-40'>
        <h2 className='font-bold text-center text-3xl mb-5'>Browse By Type</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
           
          {Data.Category.map((category) => (
            <Link to={'/search/'+category.name} key={category.id} >
            <div className='border rounded-xl p-3 items-center flex flex-col hover:shadow-md cursor-pointer'>
                <img src={category.icon} alt={category.name} width={33} height={33}/>
                <h2 className='mt-2'> {category.name}</h2>
            </div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Category