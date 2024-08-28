// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
        {/* header */}
        <Header/>
        {/* hero */}
        <Hero/>
        {/* category */}
        <Category/>
        {/* most searched cars */}
        <MostSearchedCar/>
        {/* info sectiuon */}
        <InfoSection/>
        {/* footer */}
        <Footer/>

    </div>
  )
}

export default Home