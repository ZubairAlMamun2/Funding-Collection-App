import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import RunningCampaign from '../components/RunningCampaign'
import ExtraSection from '../components/ExtraSection'
import ThemeToggle from '../components/ThemeToggle'


const HomeLayouts = () => {

  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <ThemeToggle />
        <Banner />
        <RunningCampaign />
        
        <ExtraSection />
        <Footer />
    </div>
  )
}

export default HomeLayouts

