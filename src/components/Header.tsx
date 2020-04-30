import React, { FC } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
`;

const Navigation = styled(NavLink)`
  position: relative;
  width: 80px;
  height: 30px;
  color: black;
  text-decoration: none;
  text-align: center;
  line-height: 28px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: red;
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
        home
      </Navigation>
      <Navigation exact to="/about" activeClassName="active">
        about
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
