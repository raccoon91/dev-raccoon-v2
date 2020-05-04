import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";

const HomeContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400vh;
  background: linear-gradient(180deg, #48c6ef 0%, #6f86d6 75%);
`;

const SVGWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 700px;
  margin-top: -350px;
  margin-left: -350px;
  animation: spin 5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  width: 200px;
  height: 200px;
  margin-left: -100px;
  animation: spin 3s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

interface ITitleProps {
  color?: string;
}
const Title = styled.p<ITitleProps>`
  font-size: 100px;
  font-weight: 700;
  color: ${({ color }): string => color || "white"};
`;

interface ITextProps {
  size?: string;
  weight?: string;
  color?: string;
  margin?: string;
}
const Text = styled.p<ITextProps>`
  margin: ${({ margin }): string => margin || "unset"};
  color: ${({ color }): string => color || "white"};
  font-size: 24px;
  font-weight: 700;
`;

const End = styled(Content)`
  background-color: white;
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
  const [angle, setAngle] = useState<string>("100,60 65,120 135,120 135,120 135,120 135,120");
  const [storkeColor, setStrokeColor] = useState<string>("white");
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (value <= 0.25) {
        setAngle("100,60 65,120 135,120 135,120 135,120 135,120");
        setStrokeColor("white");
      } else if (value > 0.25 && value <= 0.5) {
        setAngle("128,72 72,72 72,128 128,128 128,128 128,128");
        setStrokeColor("white");
      } else if (value > 0.5 && value <= 0.75) {
        setAngle("100,60 62,88 76,132 124,132 138,88 138,88");
        setStrokeColor("white");
      } else {
        setAngle("120,65 80,65 60,100 80,135 120,135 140,100");
        setStrokeColor("black");
      }
    });

    return () => scrollYProgress.destroy();
  }, [scrollYProgress]);

  // 100,60 65,120 135,120 135,120 135,120 135,120
  //  128,72 72,72 72,128 128,128 128,128 128,128
  //  100,60 62,88 76,132 124,132 138,88 138,88
  //  120,65 80,65 60,100 80,135 120,135 140,100

  return (
    <HomeContainer initial="initial" animate="enter" exit="exit" variants={pageVariants} transition={pageTransition}>
      <SVGWrapper>
        <SVG>
          <motion.polygon
            initial={{
              points: "100,60 65,120 135,120 135,120 135,120 135,120",
              fill: "none",
              stroke: "white",
              strokeWidth: 10,
            }}
            animate={{ points: angle, stroke: storkeColor }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />
        </SVG>
      </SVGWrapper>
      <Content>
        <Title>FAST</Title>
        <Text margin="32px 0 0 0">빠른 배움과 실행 능력</Text>
      </Content>
      <Content>
        <Title>PASSION</Title>
        <Text margin="32px 0 0 0">개발에 대한 열정</Text>
      </Content>
      <Content>
        <Title>LIKE</Title>
        <Text margin="32px 0 0 0">프론트엔드 개발을 좋아함</Text>
      </Content>
      <End>
        <Text color="black" margin="0 0 32px 0">
          프론트엔드 개발자
        </Text>
        <Title color="black">DEV RACCOON</Title>
      </End>
    </HomeContainer>
  );
};

export default Home;
