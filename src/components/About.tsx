import React, { FC } from "react";
import styled, { css } from "styled-components";

interface IAboutContainerProps {
  mount: boolean;
}
const AboutContainer = styled.div<IAboutContainerProps>`
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

interface IAboutProps {
  mount: boolean;
}
const About: FC<IAboutProps> = ({ mount }) => {
  return (
    <AboutContainer mount={mount}>
      <h1>About</h1>
      <p>
        Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex velit, quis faucibus libero congue et.
        Quisque convallis eu nisl et congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci nulla,
        eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse sollicitudin nibh lacus, ut bibendum risus
        elementum a.
      </p>
    </AboutContainer>
  );
};

export default About;
