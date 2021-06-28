import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomeHeading from "./components/HomeHeading";
import PastPresFuture from "./components/PastPresFuture";
import Projects from "./components/Projects";
import Certs from "./components/Certs";
import Footer from "./components/Footer";
import EdZen from "./components/edZen/EdZen";

// import Test from "./components/Test";

import "./public/static/css/app.css";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <HomeHeading />

            <PastPresFuture />

            <Projects />

            <Certs />

            <Footer />
          </Route>

          <Route exact path="/everyday-zen">
            <EdZen />
            <Footer />
          </Route>

          {/* <Route exact path="/test">
            <Test />
          </Route> */}

          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

// Wireframe: https://wireframe.cc/ROwrUh
