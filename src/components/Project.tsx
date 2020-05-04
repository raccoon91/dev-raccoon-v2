import React, { FC, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import Modal from "components/Modal";

import projectData from "config/project.json";

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 180px;
  height: 100vh;
  background-color: rgb(248, 249, 250);
`;

const Card = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  height: 350px;
  padding-bottom: 20px;
  margin: 0 20px;
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

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
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
      {projectData.map((project) => (
        <Card
          key={project.title}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.3, delay: project.delay }}
          onClick={handleOpenModal}
        >
          <ImageWrapper>
            <Image src={project.imageUrl} alt="Test" />
          </ImageWrapper>
          <Row marginTop="5px">
            <Title>{project.title}</Title>
            <Date size="14px" color="gray">
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

      <AnimatePresence>{isOpenModal && <Modal handleCloseModal={handleCloseModal} />}</AnimatePresence>
    </ProjectContainer>
  );
};

export default Project;
