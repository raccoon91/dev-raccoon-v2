import React, { FC } from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
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

const About: FC = () => {
  return (
    <AboutContainer>
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
