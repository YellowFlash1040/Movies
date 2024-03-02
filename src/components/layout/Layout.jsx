import React, { Suspense } from "react";
import { Header } from "../../components";
import { Outlet } from "react-router-dom";
import { Loader } from "../shared/loader/Loader";

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
