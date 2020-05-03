import React, { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutContainer = styled(motion.div)``;

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.3,
};

const About: FC = () => {
  return (
    <AboutContainer initial="initial" animate="enter" exit="exit" variants={pageVariants} transition={pageTransition}>
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
