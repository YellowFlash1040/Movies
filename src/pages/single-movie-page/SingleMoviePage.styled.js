import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 10px 40px 40px 40px;
`;
export const StyledLink = styled(NavLink)`
  border: 1px solid black;
  border-radius: 6px;
  padding: 4px 6px;
  text-decoration: none;

  margin-bottom: 20px;
  display: inline-block;
`;
