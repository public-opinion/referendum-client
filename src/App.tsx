
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./404";

import Home from "./home/Home"
import DomainHome from "./domain/DomainHome";
import Login from "./login";
import Playground from "./playground/Playground";
import TopicPage from "./topic/TopicPage"
import CreateTopic from "./topic/create/CreateTopic";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/d/:domainName"><DomainHome /></Route>
        <Route path="/domain/:domainName"><DomainHome /></Route>
        <Route path="/topic/create"><CreateTopic /></Route>
        <Route path="/topic"><TopicPage /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/playground"><Playground /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    </Router>
  );
}
