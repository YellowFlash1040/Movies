import React from "react";

import styles from "./NavigationBar.module.css";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className={styles.navigationMenu}>
      <NavLink className={styles.menuLink} to='/'>
        Home
      </NavLink>
      <NavLink className={styles.menuLink} to='/movies'>
        Movies
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
