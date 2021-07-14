import React, { useState } from "react";

import "../../public/static/css/Sonata.css";

import SonataHeading from "./SonataHeading";
import SonataIntro from "./SonataIntro";
import ExpandedImage from "../ExpandedImage";
import WireframeSection from "./WireframeSection";
import PrototypeSection from "./PrototypeSection";
import CodingSection from "./CodingSection";
import Footer from "../Footer";

import TopOfPageBtn from "../TopOfPageBtn";

export default function SonataEvents() {
  const [showLargerImage, setShowLargerImage] = useState(false);
  const [lgImgData, setLgImgData] = useState({
    img: null,
    srcSet: null,
    alt: null,
    bg: false,
    dark: false,
  });

  function handleImageClick(img, srcSet, alt, bg, dark) {
    srcSet
      ? setLgImgData({ img: img, srcSet: srcSet, alt: alt, bg: bg, dark: dark })
      : setLgImgData({ img: img, alt: alt, bg: bg, dark: dark });
    setShowLargerImage(!showLargerImage);
  }

  return (
    <>
      <div className="SonataBody">
        <TopOfPageBtn destination={"#sonataTop"} />
        <ExpandedImage data={lgImgData} handleImageClick={handleImageClick} />

        <SonataHeading handleImageClick={handleImageClick} />
        <SonataIntro />
        <WireframeSection handleImageClick={handleImageClick} />
        <PrototypeSection handleImageClick={handleImageClick} />
        <CodingSection handleImageClick={handleImageClick} />
      </div>

      <Footer />
    </>
  );
}
