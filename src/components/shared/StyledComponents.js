import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: ${props => props.$color || 'black'};
  font-size: calc((1vh + 1vw) * 1.5);
  font-weight: bold;
  text-decoration: none;

  &.active {
    color: red;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledSection = styled.section`
  padding-top: 20px;
`;
