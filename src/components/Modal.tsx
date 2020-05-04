import React, { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { ReactComponent as Close } from "images/close.svg";
import { ReactComponent as Tools } from "images/tools.svg";

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

const ModalFloat = styled(motion.div)`
  position: relative;
  z-index: 3;
`;

const ModalExpand = styled(motion.div)`
  overflow: hidden;
  background-color: white;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 120px;
  padding: 40px;
`;

const CloseIcon = styled(Close)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 680px;
`;

interface ITextProps {
  size?: string;
  weight?: string;
  marginTop?: string;
}
const Text = styled.p<ITextProps>`
  font-size: ${({ size }): string => size || "16px"};
  font-weight: ${({ weight }): string => weight || "400"};
  margin-top: ${({ marginTop }): string => marginTop || "0"};
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

const floatVariants = {
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

const expandVariants = {
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

// const contentVariants = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       delay: 0.4,
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       delay: 0,
//     },
//   },
// };

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
      <ModalFloat initial="initial" animate="animate" exit="exit" variants={floatVariants}>
        <ModalExpand initial="initial" animate="animate" exit="exit" variants={expandVariants}>
          <ModalHeader>
            <CloseIcon onClick={handleCloseModal} />
          </ModalHeader>
          <ModalContent>
            <Tools width="200" height="200" />
            <Text size="20px" weight="700" marginTop="64px">
              준비 중입니다.
            </Text>
          </ModalContent>
        </ModalExpand>
      </ModalFloat>
    </ModalContainer>
  );
};

export default Modal;
