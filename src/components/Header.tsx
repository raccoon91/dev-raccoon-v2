import React, { FC } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";

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
        홈
      </Navigation>
      <Navigation exact to="/about" activeClassName="active" onClick={handleChangeRoute("/about")}>
        포트폴리오
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
