import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'

const AuthLayouts = () => {
  return (
    <div>
        <header>
            <NavBar />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AuthLayouts