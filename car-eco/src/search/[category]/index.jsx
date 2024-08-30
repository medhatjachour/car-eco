// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '@/components/Header'
import Search from './../../components/Search';
import { useParams } from 'react-router-dom';
import { db } from '../../../configs/index';
import { carImages, carListing } from '../../../configs/schema';
import { eq } from 'drizzle-orm';

const SearchByCategory = () => {
  const {category} = useParams()
  const getCarlList= async () => {
    const result= db.select().from(carListing).innerJoin(carImages,eq(carListing.id.carImages.carListingId))
  }
  
    return (
    <div>
        <Header/>
        <div className='p-8 bg-black flex justify-center'>
            <Search />
        </div>
        <div>
            <h2 className='p-6 md:px-20 font-bold text-4xl'>{category}</h2>
        </div>
    </div>
  )
}

export default SearchByCategory