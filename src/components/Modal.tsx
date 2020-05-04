import React, { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const ModalOverlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  cursor: pointer;
`;

const ModalWrapper = styled(motion.div)`
  position: relative;
  z-index: 3;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
`;

const overlayVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 0.5,
    transition: {
      duration: 0.3,
      delay: 0,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

const wrapperVariants = {
  initial: { y: "50vh" },
  animate: {
    y: "0",
    transition: {
      duration: 0.2,
      delay: 0,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-50vh",
    transition: {
      duration: 0.2,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

const contentVariants = {
  initial: {
    width: "100px",
    height: "100px",
    borderRadius: "50px",
  },
  animate: {
    width: "1200px",
    height: "800px",
    borderRadius: "0",
    transition: {
      duration: 0.2,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    transition: {
      duration: 0.2,
      delay: 0,
      ease: "easeInOut",
    },
  },
};

interface IModalProps {
  handleCloseModal: () => void;
}
const Modal: FC<IModalProps> = ({ handleCloseModal }) => {
  return (
    <ModalContainer>
      <ModalOverlay
        initial="initial"
        animate="animate"
        exit="exit"
        variants={overlayVariants}
        onClick={handleCloseModal}
      />
      <ModalWrapper initial="initial" animate="animate" exit="exit" variants={wrapperVariants}>
        <ModalContent initial="initial" animate="animate" exit="exit" variants={contentVariants}></ModalContent>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
