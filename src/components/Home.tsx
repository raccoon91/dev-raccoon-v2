import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";

const HomeContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400vh;
  background: linear-gradient(180deg, #48c6ef 0%, #6f86d6 100%);
`;

const SVG = styled.svg`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -365px;
  margin-left: -700px;
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
  const [angle, setAngle] = useState<string>(
    "983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.89999999999998 416.6,101.89999999999998 416.6,101.9",
  );
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (value <= 0.25) {
        setAngle("983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.89999999999998 416.6,101.89999999999998 416.6,101.9");
      } else if (value > 0.25 && value <= 0.5) {
        setAngle("890.9,54.3 1081.8,385 890.9,715.7 509.1,715.7 318.2,385 509.1,54.299999999999955");
      } else if (value > 0.5 && value <= 0.75) {
        setAngle("700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6");
      } else {
        setAngle("983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.89999999999998 416.6,101.89999999999998 416.6,101.9");
      }
    });

    return () => scrollYProgress.destroy();
  }, [scrollYProgress]);

  return (
    <HomeContainer initial="initial" animate="enter" exit="exit" variants={pageVariants} transition={pageTransition}>
      <SVG width="1400" height="770">
        <motion.polygon
          initial={{
            points: "983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.89999999999998 416.6,101.89999999999998 416.6,101.9",
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
    </HomeContainer>
  );
};

export default Home;
