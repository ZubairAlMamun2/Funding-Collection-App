import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeLayouts = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <h1 className='min-h-[40vh]'></h1>
        <Footer />
    </div>
  )
}

export default HomeLayouts

