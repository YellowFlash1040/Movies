import { StyledLink } from "../shared/StyledComponents";
import React from "react";
import { NavigationMenu } from "./NavigationBar.styled";

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/movies'>Movies</StyledLink>
    </NavigationMenu>
  );
};

export default NavigationBar;
