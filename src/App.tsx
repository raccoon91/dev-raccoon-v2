import React, { FC } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import Header from "components/Header";
import Home from "components/Home";
import About from "components/About";

const AppContainer = styled.div`
  padding-top: 60px;
`;

const App: FC = () => {
  const location = useLocation();

  return (
    <AppContainer>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </AnimatePresence>
    </AppContainer>
  );
};

export default App;
