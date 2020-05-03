import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";

const HomeContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 300vh;
  background: linear-gradient(180deg, #48c6ef 0%, #6f86d6 100%);
`;

const SVG = styled.svg`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 1400px;
  height: 770px;
  transform: translate(-50%, -50%);
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Text = styled.p`
  font-size: 100px;
  font-weight: 700;
  color: white;
`;

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.3,
};

const Home: FC = () => {
  const [angle, setAngle] = useState<string>("700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6");
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (value <= 0.33) {
        setAngle("700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6");
      } else if (value > 0.33 && value <= 0.66) {
        setAngle("983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.9 416.6,101.9 416.6,101.9");
      } else {
        setAngle("890.9,54.3 1081.8,385 890.9,715.7 509.1,715.7 318.2,385 509.1,54.3");
      }
    });

    return () => scrollYProgress.destroy();
  }, [scrollYProgress]);

  return (
    <HomeContainer initial="initial" animate="enter" exit="exit" variants={pageVariants} transition={pageTransition}>
      <SVG>
        <motion.polygon
          initial={{
            points: "700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6",
            fill: "none",
            stroke: "white",
            strokeWidth: 10,
          }}
          animate={{ points: angle }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      </SVG>
      <TextWrapper>
        <Text>Fast</Text>
      </TextWrapper>
      <TextWrapper>
        <Text>Fashion</Text>
      </TextWrapper>
      <TextWrapper>
        <Text>Fun</Text>
      </TextWrapper>
    </HomeContainer>
  );
};

export default Home;
