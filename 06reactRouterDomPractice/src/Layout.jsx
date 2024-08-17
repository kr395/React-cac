import React from 'react'
import { Outlet } from 'react-router-dom'
import {HeadSection, FooterSection} from './Components/index'

function Layout() {
  return (
    <>
      <HeadSection/>
      <Outlet />
      <FooterSection/>
    </>
  )
}

export default Layout