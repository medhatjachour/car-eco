// eslint-disable-next-line no-unused-vars
import React from 'react'
import Search from './Search';

const Hero = () => {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#cdcdcd]'>
            <h2 className='text-lg'>find care for sale and rent </h2>
            <h2 className='text-[60px] font-bold'>find your dream car</h2>
            <Search/>
            <img src="/tesla.png" alt="tesla hero" className='mt-10'/>
        </div>
    </div>
  )
}

export default Hero