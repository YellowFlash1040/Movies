import React, { Suspense } from "react";
import { Header } from "../../components";
import { Outlet } from "react-router-dom";
import { Loader } from "../shared/loader/Loader";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className={styles.pageLoaderWrapper}>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
