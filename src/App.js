import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomeHeading from "./components/HomeHeading";
import PastPresFuture from "./components/PastPresFuture";
import Projects from "./components/Projects";
import Certs from "./components/Certs";
import Footer from "./components/Footer";

import "./public/static/css/app.css";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/resume">
            <Resume />
          </Route>

          <Route exact path="/home">
            <HomeHeading />

            <PastPresFuture />

            <Projects />

            <Certs />

            <Footer />
          </Route>

          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

// Wireframe: https://wireframe.cc/ROwrUh

export default App;
