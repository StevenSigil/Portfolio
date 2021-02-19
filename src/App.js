import HomeHeading from "./components/HomeHeading";
import PastPresFuture from "./components/PastPresFuture";
import Projects from "./components/Projects";
import Certs from "./components/Certs";
import Footer from "./components/Footer";

import "./public/static/css/app.css";

function App() {
  return (
    <>
      <HomeHeading />

      <PastPresFuture />

      <Projects />

      <Certs />

      <Footer />
    </>
  );
}

// Wireframe: https://wireframe.cc/ROwrUh

export default App;
