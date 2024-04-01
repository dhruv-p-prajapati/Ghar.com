import React from 'react';
import {Footer, Navbar} from '../index';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col justify-around items-center min-h-screen'>
        <Navbar />

        <Outlet />

        <Footer />
    </div>
  )
}

export default Layout
