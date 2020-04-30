import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import Header from "components/Header";
import Home from "components/Home";
import About from "components/About";

const AppContainer = styled.div`
  position: relative;
`;

const App: FC = () => {
  return (
    <Router>
      <Header />
      <AppContainer>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={500} classNames="change">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </AppContainer>
    </Router>
  );
};

export default App;
