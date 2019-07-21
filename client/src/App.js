import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import SearchBooks from "./pages/SearchBooks";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
