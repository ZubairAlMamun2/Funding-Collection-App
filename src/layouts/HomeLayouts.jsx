import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const HomeLayouts = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <Banner />
        <Footer />
    </div>
  )
}

export default HomeLayouts

