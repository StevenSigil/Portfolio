import React, { useState, lazy, Suspense } from "react";

import "../../public/static/css/EdZ2.css";

const ExpandedImage = lazy(() => import("./ExpandedImage"));
const TopOfPageBtn = lazy(() => import("./TopOfPageBtn"));

const PageHeading = lazy(() => import("./PageHeading"));
const IntroSection = lazy(() => import("./IntroSection"));
const ResearchSection = lazy(() => import("./ResearchSection"));
const WireFrameSection = lazy(() => import("./WireFrameSection"));
const PrototypeSection = lazy(() => import("./PrototypeSection"));
const Footer = lazy(() => import("../Footer"));

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

  const renderLoader = () => <h1>Loading...</h1>;

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <TopOfPageBtn />
        <ExpandedImage data={lgImgData} handleImageClick={handleImageClick} />

        <span className="edZ2Body">
          <PageHeading handleImageClick={handleImageClick} />

          <IntroSection />

          <ResearchSection handleImageClick={handleImageClick} />

          <WireFrameSection handleImageClick={handleImageClick} />

          <PrototypeSection handleImageClick={handleImageClick} />

          <Footer />
        </span>
      </Suspense>
    </>
  );
}
