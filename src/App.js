import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./public/static/css/app.css";

import Spinner from "./components/Spinner";

// import SunOverPlane from "./components/arts/singleItem/SunOverPlane";
// import SleepingTigers from "./components/arts/singleItem/SleepingTigers";
// import LDRobots from "./components/arts/singleItem/LDRobots";
// import DPICorp from "./components/arts/singleItem/DPICorp";

const Home = lazy(() => import("./components/home/Home"));
const EdZen2 = lazy(() => import("./components/edZen2/EdZen2"));
const SonataEvents = lazy(() => import("./components/sonata/SonataEvents"));
const ArtsHome = lazy(() => import("./components/arts/ArtsHome"));

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

          <Route exact path="/sonataEvents">
            <Suspense fallback={<Spinner />}>
              <SonataEvents />
            </Suspense>
          </Route>

          <Route exact path="/digitalMedia">
            <Suspense fallback={<Spinner />}>
              <ArtsHome />
            </Suspense>
          </Route>

          {/* ============================================================== */}
          {/* ======================== VIDEO PAGES ========================= */}
          {/* <Route path="/digitalMedia/sunoverplane" component={SunOverPlane} />
          <Route path="/digitalMedia/stigers" component={SleepingTigers} />
          <Route path="/digitalMedia/ldrobots" component={LDRobots} />
          <Route path="/digitalMedia/dpicorp" component={DPICorp} /> */}
          {/* ============================================================== */}

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
