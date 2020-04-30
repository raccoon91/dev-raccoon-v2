import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "page/HomePage";
import AboutPage from "page/AboutPage";

const App: FC = () => {
  const handleChangeRoute = async () => {
    console.log("hi");
  };

  return (
    <Router>
      <Route path="/" onChange={handleChangeRoute}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Route>
    </Router>
  );
};

export default App;
