import React, { FC, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import Modal from "components/Modal";

import projectData from "config/project.json";

const ProjectContainer = styled.div`
  overflow-y: auto;
  padding-top: 180px;
  height: 100vh;
  background-color: rgb(248, 249, 250);
`;

const CardWrapper = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 360px;
  height: 350px;
  padding-bottom: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.04);
  background-color: white;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  overflow-y: hidden;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 240px;
`;

interface IRowProps {
  marginTop?: string;
}
const Row = styled.div<IRowProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin-top: ${({ marginTop }): string => marginTop || "unset"};
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

interface ITextProps {
  size?: string;
  weight?: string;
  color?: string;
  verticalPad?: string;
}
const Text = styled.p<ITextProps>`
  font-size: ${({ size }): string => size || "16px"};
  font-weight: ${({ weight }): string => weight || "400"};
  color: ${({ color }): string => color || "black"};
  padding: ${({ verticalPad }): string => (verticalPad ? `0 ${verticalPad}` : "0")};
`;

const Date = styled(Text)`
  margin-left: auto;
`;

const wrapperVariants = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const cardVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Project: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <ProjectContainer>
      <CardWrapper initial="initial" animate="animate" exit="exit" variants={wrapperVariants}>
        {projectData.map((project) => (
          <Card key={project.title} variants={cardVariants} onClick={handleOpenModal}>
            <ImageWrapper>
              <Image src={project.imageUrl} />
            </ImageWrapper>
            <Row marginTop="5px">
              <Title>{project.title}</Title>
              <Date size="12px" color="gray">
                {project.duration}
              </Date>
            </Row>
            <Row marginTop="auto">
              <Text weight="700">{project.position}</Text>
            </Row>

            <Row marginTop="16px">
              <Text>{project.skills}</Text>
            </Row>
          </Card>
        ))}
      </CardWrapper>

      <AnimatePresence>{isOpenModal && <Modal handleCloseModal={handleCloseModal} />}</AnimatePresence>
    </ProjectContainer>
  );
};

export default Project;
