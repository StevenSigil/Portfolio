import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Container } from "react-bootstrap";

import { handleNextScrollPosition } from "../../util-data/everydayZen/util";

import "../../public/static/css/EdZenStyles.css";

import { ReactComponent as BackArrow } from "../../public/static/media/logos-icons/backArrow.svg";

// Sub-Components
import NavBtns from "./NavBtns";
import Directory from "./Directory";
import ScrollGroupItem from "./ScrollGroupItem";
import ExpandedImage from "./ExpandedImage";
import SingleImageWithHeader from "./SingleImageWithHeader";

// Business Analysis section
import ivf05x from "../../public/static/media/edZen_imgs/ivfPlot/ivf@0.5x.png";
import ivf1x from "../../public/static/media/edZen_imgs/ivfPlot/ivf@1x.png";
import ivf2x from "../../public/static/media/edZen_imgs/ivfPlot/ivf@2x.png";

import compLogos05x from "../../public/static/media/edZen_imgs/CompLogos/compLogos@0.5x.png";
import compLogos1x from "../../public/static/media/edZen_imgs/CompLogos/compLogos@1x.png";
import compLogos2x from "../../public/static/media/edZen_imgs/CompLogos/compLogos@2x.png";

import compPage05x from "../../public/static/media/edZen_imgs/CompPages/compWebsites@0.5x.png";
import compPage1x from "../../public/static/media/edZen_imgs/CompPages/compWebsites@1x.png";
import compPage2x from "../../public/static/media/edZen_imgs/CompPages/compWebsites@2x.png";

// Pre-Project Planning section
import decisionPath05x from "../../public/static/media/edZen_imgs/DecisionPath/UserDecisionPaths@0.5x.png";
import decisionPath1x from "../../public/static/media/edZen_imgs/DecisionPath/UserDecisionPaths@1x.png";
import decisionPath2x from "../../public/static/media/edZen_imgs/DecisionPath/UserDecisionPaths@2x.png";

import journeyMap05x from "../../public/static/media/edZen_imgs/JourneyMap/JourneyMap@0.5x.png";
import journeyMap1x from "../../public/static/media/edZen_imgs/JourneyMap/JourneyMap@1x.png";
import journeyMap2x from "../../public/static/media/edZen_imgs/JourneyMap/JourneyMap@2x.png";

import moodBoard05x from "../../public/static/media/edZen_imgs/MoodBoard/moodBoard@0.5x.png";
import moodBoard1x from "../../public/static/media/edZen_imgs/MoodBoard/moodBoard@1x.png";
import moodBoard2x from "../../public/static/media/edZen_imgs/MoodBoard/moodBoard@2x.png";

import siteMap05x from "../../public/static/media/edZen_imgs/SiteMap/siteMap@0.5x.png";
import siteMap1x from "../../public/static/media/edZen_imgs/SiteMap/siteMap@1x.png";
import siteMap2x from "../../public/static/media/edZen_imgs/SiteMap/siteMap@2x.png";

// Final Designs section
import logos05x from "../../public/static/media/edZen_imgs/FinalLogos/finalLogos@0.5x.png";
import logos1x from "../../public/static/media/edZen_imgs/FinalLogos/finalLogos@1x.png";
import logos2x from "../../public/static/media/edZen_imgs/FinalLogos/finalLogos@2x.png";

// Data and/for Mapped Components
import { Intro, Analysis, ProjReq, AddInfo } from "./TextComps";
import { userPersonaData } from "../../util-data/everydayZen/UserPersonas";
import { wireFrameData } from "../../util-data/everydayZen/wireFrameData";
import { prototypeData } from "../../util-data/everydayZen/prototypeData";

export default function EdZen() {
  const history = useHistory();

  const [showLargerImage, setShowLargerImage] = useState(false);

  const [lgImgData, setLgImgData] = useState({
    img: null,
    srcSet: null,
    alt: null,
  });

  function handleBackArrow() {
    history.push("/home");
  }

  function handleImageClick(img, srcSet, alt) {
    srcSet
      ? setLgImgData({ img: img, srcSet: srcSet, alt: alt })
      : setLgImgData({ img: img, alt: alt });
    setShowLargerImage(!showLargerImage);
  }

  return (
    <>
      {/* ====================== Absolute & Fixed Components ====================== */}
      <NavBtns handleNextScrollPosition={handleNextScrollPosition} />
      <ExpandedImage data={lgImgData} handleImageClick={handleImageClick} />

      <header id="top">
        <h1>Everyday Zen: UX & UI Project</h1>
        <div className="mainHeadBack" onClick={handleBackArrow}>
          <BackArrow />
        </div>
      </header>

      <Directory />

      <Container className="outerDiv">
        <Row noGutters>
          <h2>Research</h2>
        </Row>

        <Intro />
        <Analysis />
        <ProjReq />
        <AddInfo />

        <Row noGutters id="persona">
          <h3>User Persona's:</h3>
        </Row>

        <Row noGutters className="imgContainer">
          <div className="scroll-x">
            {userPersonaData.map((person, index) => {
              return (
                <ScrollGroupItem
                  key={index}
                  headText={person.heading}
                  img={person.img}
                  imgAlt={person.alt}
                  func={handleImageClick}
                />
              );
            })}
          </div>
        </Row>

        <Row noGutters>
          <h2>Business {"&"} Competitor Analysis</h2>
        </Row>

        <SingleImageWithHeader
          id="ivfChart"
          hText="Importance Vs. Feasibility Chart"
          srcSet={`${ivf05x} 960w, ${ivf1x} 1920w, ${ivf2x} 3840w`}
          img={ivf1x}
          alt="importance vs feasibility chart"
          handleImageClick={handleImageClick}
        />

        <SingleImageWithHeader
          id="compLogos"
          hText="Competitive Logo's:"
          srcSet={`${compLogos05x} 960w, ${compLogos1x} 1920w, ${compLogos2x} 3840w`}
          img={compLogos1x}
          alt="competitive logos"
          handleImageClick={handleImageClick}
        />

        <SingleImageWithHeader
          id="compWebsites"
          hText="Competitive Websites:"
          srcSet={`${compPage05x} 960w, ${compPage1x} 1920w, ${compPage2x} 3840w`}
          img={compPage05x}
          alt="competitive websites"
          handleImageClick={handleImageClick}
        />

        <Row noGutters>
          <h2>Pre-Project Planning</h2>
        </Row>

        <SingleImageWithHeader
          id="decisionPaths"
          hText="Likely Decision Paths:"
          srcSet={`${decisionPath05x} 522w, ${decisionPath1x} 1044w, ${decisionPath2x} 2088w`}
          img={decisionPath05x}
          alt="multiple user decision paths"
          handleImageClick={handleImageClick}
        />

        <SingleImageWithHeader
          id="journeyPath"
          hText="Extended Journey Map (Initial User):"
          srcSet={`${journeyMap05x} 960w, ${journeyMap1x} 1920w, ${journeyMap2x} 3840w`}
          img={journeyMap05x}
          alt="Initial User example Journey Map"
          handleImageClick={handleImageClick}
        />

        <SingleImageWithHeader
          id="moodBoard"
          hText="Mood Board:"
          srcSet={`${moodBoard05x} 960w, ${moodBoard1x} 1920w, ${moodBoard2x} 3840w`}
          img={moodBoard05x}
          alt="Everyday Zen Website & Logo Mood Board"
          handleImageClick={handleImageClick}
        />

        <SingleImageWithHeader
          id="siteMap"
          hText="Site Map:"
          srcSet={`${siteMap05x} 960w, ${siteMap1x} 1920w, ${siteMap2x} 3840w`}
          img={siteMap1x}
          alt="Everyday Zen Website - Site Map"
          handleImageClick={handleImageClick}
        />

        <Row noGutters>
          <h2>Final Designs</h2>
        </Row>

        <SingleImageWithHeader
          id="finalLogos"
          hText="Illustrated Logo's:"
          srcSet={`${logos05x} 960w, ${logos1x} 1920w, ${logos2x} 3840w`}
          img={logos05x}
          alt="Final logos for review by client"
          handleImageClick={handleImageClick}
        />

        <Row noGutters className="headingWithLink" id="wireFrame">
          <h3>Wire frames:</h3>
          {/* <a href="#">view on XD</a> */}
        </Row>
        <Row noGutters className="imgContainer">
          <div className="scroll-x">
            {wireFrameData.map((element, index) => {
              return (
                <ScrollGroupItem
                  key={index}
                  headText={element.heading}
                  img={element.img}
                  imgAlt={element.alt}
                  func={handleImageClick}
                />
              );
            })}
          </div>
        </Row>

        <div className="sectionContainer" id="prototype">
          <Row noGutters className="headingWithLink">
            <h3>Prototype:</h3>
            {/* <a href="#">view on XD</a> */}
          </Row>
          <Row noGutters className="imgContainer">
            <div className="scroll-x">
              {prototypeData.map((element, index) => {
                return (
                  <ScrollGroupItem
                    key={index}
                    headText={element.heading}
                    img={element.img}
                    imgAlt={element.alt}
                    func={handleImageClick}
                  />
                );
              })}
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
}
