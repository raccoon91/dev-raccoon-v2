import React, { FC } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  &.change-enter {
    opacity: 0;
    transform: translateY(30px);
    color: red;
  }

  &.change-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s, transform 0.5s;
    color: blue;
  }

  &.change-exit {
    opacity: 1;
    transform: translateY(0);
    color: green;
  }

  &.change-exit-active {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.3s, transform 0.5s;
    color: yellow;
  }
`;

const Home: FC = () => {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend tristique, lorem
        magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel porta
        turpis, ut iaculis justo.
      </p>
    </HomeContainer>
  );
};

export default Home;
