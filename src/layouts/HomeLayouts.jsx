import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import RunningCampaign from '../components/RunningCampaign'

const HomeLayouts = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <Banner />
        <RunningCampaign />
        <Footer />
    </div>
  )
}

export default HomeLayouts

