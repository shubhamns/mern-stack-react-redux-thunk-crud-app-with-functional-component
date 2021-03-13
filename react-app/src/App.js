import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Read from "./pages/Read";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Read} />
        <Route path="/create" exact component={Create} />
        <Route path="/update/:id" exact component={Update} />
      </Switch>
    </Router>
  );
}

export default App;
