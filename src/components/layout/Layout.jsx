import React, { Suspense } from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import { Loader } from './shared/loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
