import NavigationBar from 'components/navigation-bar/NavigationBar';
import React from 'react';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <NavigationBar />
    </StyledHeader>
  );
};

export default Header;