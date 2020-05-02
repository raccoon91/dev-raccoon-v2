import React, { FC } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";

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
  const history = useHistory();

  const handleChangeRoute = (path: string) => {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      const { pathname } = history.location;

      if (path === pathname) e.preventDefault();
    };
  };

  return (
    <HeaderContainer>
      <Navigation exact to="/" activeClassName="active" onClick={handleChangeRoute("/")}>
        home
      </Navigation>
      <Navigation exact to="/about" activeClassName="active" onClick={handleChangeRoute("/about")}>
        about
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
