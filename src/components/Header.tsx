import React, { FC } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  background-color: white;
  z-index: 1;
`;

const Navigation = styled(NavLink)`
  position: relative;
  width: 160px;
  height: 60px;
  color: black;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  line-height: 58px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #0074d9;
    transition: width 0.5s;
  }

  &.active {
    &::after {
      width: 100%;
    }
  }
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Navigation exact to="/" activeClassName="active">
        Home
      </Navigation>
      <Navigation exact to="/project" activeClassName="active">
        Project
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
