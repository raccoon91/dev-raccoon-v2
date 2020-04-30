import React, { FC } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
`;

const HeaderLink = styled.nav`
  width: 80px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  line-height: 28px;
  cursor: pointer;
  transition: border-bottom-color 0.5s;

  &.active {
    border-bottom-color: red;
  }
`;

interface IHeaderProps {
  routerChangeEvent: () => void;
}
const Header: FC<IHeaderProps> = ({ routerChangeEvent }) => {
  const history = useHistory();
  const { pathname } = history.location;

  const onChangeRoute = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { path } = e.currentTarget.dataset;

    if (path && path !== pathname) {
      routerChangeEvent();

      setTimeout(() => {
        history.push(path);
      }, 500);
    }
  };

  return (
    <HeaderContainer>
      <HeaderLink data-path="/" onClick={onChangeRoute}>
        home
      </HeaderLink>
      <HeaderLink data-path="/about" onClick={onChangeRoute}>
        about
      </HeaderLink>
    </HeaderContainer>
  );
};

export default Header;
