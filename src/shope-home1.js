import React, { useState, useReducer } from "react";
import ReactDOM, { createPortal } from "react-dom";
import Cart from "./Cart";
import Home from "./Home";

import ReactBootstrap, {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Table,
  Button,
  Form,
  FormControl,
  Card,
  Carousel,
  Badge,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
