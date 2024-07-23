import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './MyNavbar';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;