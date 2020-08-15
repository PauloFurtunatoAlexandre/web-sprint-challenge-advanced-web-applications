import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import ColorList from "./components/ColorList";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
          <PrivateRoute exact path="/bubblepage" component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
