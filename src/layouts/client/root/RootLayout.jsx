import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <Outlet />
    <footer>Footer</footer>
    <p>© 2023 Your Company</p>
    </>
  )
}

export default RootLayout