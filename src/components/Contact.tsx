import React, { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { ReactComponent as Gmail } from "images/gmail.svg";
import { ReactComponent as Phone } from "images/phone.svg";
import { ReactComponent as Notion } from "images/notion.svg";
import { ReactComponent as Github } from "images/github.svg";
import { ReactComponent as Medium } from "images/medium.svg";

const ContactContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 180px;
  height: 100vh;
  background-color: rgb(248, 249, 250);
`;

const ContactItem = styled(motion.li)`
  margin-top: 32px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.04);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin-left: 16px;
  font-size: 20px;
  font-weight: 700;
`;

const Anchor = styled.a`
  margin-left: 16px;
  color: #0074d9;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

const listVariants = {
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Contact: FC = () => {
  return (
    <ContactContainer>
      <motion.ul initial="initial" animate="animate" exit="exit" variants={listVariants}>
        <ContactItem variants={itemVariants}>
          <Row>
            <Gmail width="30" height="30" />
            <Text>dev.beomseok@gmail.com</Text>
          </Row>
        </ContactItem>
        <ContactItem variants={itemVariants}>
          <Row>
            <Github width="30" height="30" />
            <Anchor href="https://github.com/raccoon91" target="_blank">
              https://github.com/raccoon91
            </Anchor>
          </Row>
        </ContactItem>
        <ContactItem variants={itemVariants}>
          <Row>
            <Medium width="30" height="30" />
            <Anchor href="https://medium.com/@qsx314" target="_blank">
              Medium Dev Raccoon
            </Anchor>
          </Row>
        </ContactItem>
        <ContactItem variants={itemVariants}>
          <Row>
            <Notion width="30" height="30" />
            <Anchor href="https://www.notion.so/Portfolio-2185303bdc8d4b5d867b189636239ead" target="_blank">
              Portfolio
            </Anchor>
          </Row>
        </ContactItem>
        <ContactItem variants={itemVariants}>
          <Row>
            <Phone width="30" height="30" />
            <Text>010-5600-8094</Text>
          </Row>
        </ContactItem>
      </motion.ul>
    </ContactContainer>
  );
};

export default Contact;
