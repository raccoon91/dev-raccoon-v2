import React, { FC } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import Header from "components/Header";
import Home from "components/Home";
import Project from "components/Project";
import Contact from "components/Contact";

const AppContainer = styled.div``;

const App: FC = () => {
  const location = useLocation();

  return (
    <AppContainer>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </AppContainer>
  );
};

export default App;
