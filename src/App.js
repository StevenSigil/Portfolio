import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./public/static/css/app.css";

import Spinner from "./components/Spinner";

const Home = lazy(() => import("./components/home/Home"));
const EdZen2 = lazy(() => import("./components/edZen2/EdZen2"));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          </Route>

          <Route exact path="/EdZen2">
            <Suspense fallback={<Spinner />}>
              <EdZen2 />
            </Suspense>
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
