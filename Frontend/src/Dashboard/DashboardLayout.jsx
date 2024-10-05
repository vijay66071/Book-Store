import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideBar from './SideBar'
import MyFooter from '../components/MyFooter'
import PriveRoute from '../PrivateRoute/PriveRoute'

const DashboardLayout = () => {
  return (
    <>
      <PriveRoute>
        <div className='flex gap-4 flex-col md:flex-row bg-green-100 '>
          <Navbar />
          <SideBar />
          <Outlet />
        </div>
        <br /><br />
        <MyFooter />
      </PriveRoute>
    </>
  )
}
export default DashboardLayout