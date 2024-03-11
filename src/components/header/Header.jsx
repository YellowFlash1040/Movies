import { NavigationBar } from "../../components";
import React from "react";
import { StyledHeader } from "./Header.styled";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <StyledHeader>
      <div className={styles.container}>
        <NavigationBar />
      </div>
    </StyledHeader>
  );
};

export default Header;
