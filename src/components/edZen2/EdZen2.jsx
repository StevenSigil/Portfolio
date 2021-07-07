import React, { useState } from "react";

import "../../public/static/css/EdZ2.css";

import PageHeading from "./PageHeading";
import IntroSection from "./IntroSection";
import ResearchSection from "./ResearchSection";
import WireFrameSection from "./WireFrameSection";
import PrototypeSection from "./PrototypeSection";
import Footer from "../Footer";

import ExpandedImage from "./ExpandedImage";

export default function EdZen2() {
  const [showLargerImage, setShowLargerImage] = useState(false);
  const [lgImgData, setLgImgData] = useState({
    img: null,
    srcSet: null,
    alt: null,
    bg: false,
  });

  function handleImageClick(img, srcSet, alt, bg) {
    srcSet
      ? setLgImgData({ img: img, srcSet: srcSet, alt: alt, bg: bg })
      : setLgImgData({ img: img, alt: alt, bg: bg });
    setShowLargerImage(!showLargerImage);
  }

  return (
    <>
      <ExpandedImage data={lgImgData} handleImageClick={handleImageClick} />

      <span className="edZ2Body">
        <PageHeading />

        <IntroSection />

        <ResearchSection handleImageClick={handleImageClick} />

        <WireFrameSection handleImageClick={handleImageClick} />

        <PrototypeSection handleImageClick={handleImageClick} />

        <Footer />
      </span>
    </>
  );
}
