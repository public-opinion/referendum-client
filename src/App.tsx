
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./404";

import Home from "./home/Home"
import Login from "./login";
import Playground from "./playground/Playground";
import Topic from "./topic/Topic"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/topic"><Topic /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/playground"><Playground /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    </Router>
  );
}
