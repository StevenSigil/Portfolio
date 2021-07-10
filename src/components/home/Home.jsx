import React from "react";

import "../../public/static/css/home.css";

import HomeHeading from "./HomeHeading";
import PastPresFuture from "./PastPresFuture";
import Projects from "./Projects";
import Certs from "./Certs";
import Footer from "../Footer";

export default function Home() {
  return (
    <div>
      <HomeHeading />
      <PastPresFuture />
      <Projects />
      <Certs />
      <Footer />
    </div>
  );
}
