
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./home/Home"
import Login from "./login";
import Topic from "./topic/Topic"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/topic">
          <Topic />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <div>
            Page not found<br />
            <Link to="/">Go back to home page</Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
