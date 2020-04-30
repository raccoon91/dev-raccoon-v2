import React, { FC } from "react";
import styled, { css } from "styled-components";

interface IHomeContainerProps {
  mount: boolean;
}
const HomeContainer = styled.div<IHomeContainerProps>`
  transform: translateY(10%);
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;

  ${({ mount }) =>
    mount &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

interface IHomeProps {
  mount: boolean;
}
const Home: FC<IHomeProps> = ({ mount }) => {
  return (
    <HomeContainer mount={mount}>
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
