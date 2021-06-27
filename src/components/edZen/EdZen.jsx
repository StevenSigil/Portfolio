import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Container } from "react-bootstrap";

import "../../public/static/css/EdZenStyles.css";

import { ReactComponent as BackArrow } from "../../public/static/media/logos-icons/backArrow.svg";

import NavBtns from "./NavBtns";

import Directory from "./Directory";

// Business Analysis section
import { Intro, Analysis, ProjReq, AddInfo } from "./TextComps";

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

// Data for Mapped Components
import { userPersonaData } from "../../util-data/UserPersonas";
import { wireFrameData } from "../../util-data/edZen_wireFrameData";
import { prototypeData } from "../../util-data/edZen_prototypeData";

export default function EdZen() {
  const history = useHistory();
  const [anchorPositions, setAnchorPositions] = useState([]);

  const [showLargerImage, setShowLargerImage] = useState(false);
  const [lgImgData, setLgImgData] = useState({
    img: null,
    srcSet: null,
    alt: null,
  });

  useEffect(() => {
    setAnchorPositions([
      { "#intro": document.querySelector("#intro").offsetTop },
      { "#analysis": document.querySelector("#analysis").offsetTop },
      { "#requirements": document.querySelector("#requirements").offsetTop },
      { "#addInfo": document.querySelector("#addInfo").offsetTop },
      { "#persona": document.querySelector("#persona").offsetTop },
      { "#ivfChart": document.querySelector("#ivfChart").offsetTop },
      { "#compLogos": document.querySelector("#compLogos").offsetTop },
      { "#compWebsites": document.querySelector("#compWebsites").offsetTop },
      { "#decisionPaths": document.querySelector("#decisionPaths").offsetTop },
      { "#journeyPath": document.querySelector("#journeyPath").offsetTop },
      { "#moodBoard": document.querySelector("#moodBoard").offsetTop },
      { "#siteMap": document.querySelector("#siteMap").offsetTop },
      { "#finalLogos": document.querySelector("#finalLogos").offsetTop },
      { "#wireFrame": document.querySelector("#wireFrame").offsetTop },
      { "#prototype": document.querySelector("#prototype").offsetTop },
      { "#footer": document.querySelector("#footer").offsetTop },
    ]);
    console.log("Anchor positions have been updated");
  }, []);

  function handleBackArrow() {
    history.push("/home");
  }

  function handleNextScrollPosition() {
    const curPos = window.pageYOffset;
    const closestSection = anchorPositions.find((sections) => {
      return Object.values(sections) > curPos;
    });

    console.log(curPos, closestSection);

    const scrollOptions = {
      left: 0,
      top: Object.values(closestSection),
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
  }

  function handleImageClick(img, srcSet, alt) {
    srcSet
      ? setLgImgData({ img: img, srcSet: srcSet, alt: alt })
      : setLgImgData({ img: img, alt: alt });
    setShowLargerImage(!showLargerImage);
  }

  // function updateScrollPositions() {
  //   setAnchorPositions([
  //     { "#intro": document.querySelector("#intro").offsetTop },
  //     { "#analysis": document.querySelector("#analysis").offsetTop },
  //     { "#requirements": document.querySelector("#requirements").offsetTop },
  //     { "#addInfo": document.querySelector("#addInfo").offsetTop },
  //     { "#persona": document.querySelector("#persona").offsetTop },
  //     { "#ivfChart": document.querySelector("#ivfChart").offsetTop },
  //     { "#compLogos": document.querySelector("#compLogos").offsetTop },
  //     { "#compWebsites": document.querySelector("#compWebsites").offsetTop },
  //     { "#decisionPaths": document.querySelector("#decisionPaths").offsetTop },
  //     { "#journeyPath": document.querySelector("#journeyPath").offsetTop },
  //     { "#moodBoard": document.querySelector("#moodBoard").offsetTop },
  //     { "#siteMap": document.querySelector("#siteMap").offsetTop },
  //     { "#finalLogos": document.querySelector("#finalLogos").offsetTop },
  //     { "#wireFrame": document.querySelector("#wireFrame").offsetTop },
  //     { "#prototype": document.querySelector("#prototype").offsetTop },
  //     { "#footer": document.querySelector("#footer").offsetTop },
  //   ]);
  //   console.log("Anchor positions have been updated");
  // }

  // ============== Sub-Components ============== //
  function ExpandedImage() {
    const data = lgImgData;

    if (data.img) {
      document.querySelector("html").style.overflowY = "hidden";

      return (
        <div
          className="staticLgImg"
          onClick={() => handleImageClick(null, null, null)}
        >
          {data.srcSet ? (
            <img srcSet={data.srcSet} src={data.img} alt={data.alt} />
          ) : (
            <img src={data.img} alt={data.alt} />
          )}

          <div className="transparentOverlay">
            <p>touch anywhere to close</p>
          </div>
        </div>
      );
    } else {
      document.querySelector("html").style.overflowY = "auto";
      return null;
    }
  }

  function SingleImageWithHeader({ id, hText, srcSet, img, alt }) {
    return (
      <>
        <Row noGutters id={id}>
          <h3>{hText}</h3>
        </Row>
        <Row noGutters className="imgContainer">
          <img
            srcSet={srcSet}
            src={img}
            alt={alt}
            onClick={() => handleImageClick(img, srcSet, alt)}
          />
        </Row>
      </>
    );
  }

  function ScrollGroupItem({ headText, img, imgAlt }) {
    return (
      <div className="scrollItemWithHeading">
        {headText ? <h4>{headText}</h4> : null}
        <img
          src={img}
          alt={imgAlt}
          onClick={() => handleImageClick(img, null, imgAlt)}
        />
      </div>
    );
  }

  return (
    <>
      <NavBtns handleNextScrollPosition={handleNextScrollPosition} />

      <ExpandedImage />

      <header id="top">
        <h1>Everyday Zen: UX & UI Project</h1>
        <div className="mainHeadBack" onClick={handleBackArrow}>
          <BackArrow />
        </div>
      </header>

      <div id="directory">
        <Directory />
      </div>

      <Container className="outerDiv">
        <Row noGutters>
          <h2>Research Phase</h2>
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
                />
              );
            })}
          </div>
        </Row>

        <Row noGutters>
          <h2>Business & Competitor Analysis</h2>
        </Row>

        <SingleImageWithHeader
          id="ivfChart"
          hText="Importance Vs. Feasibility Chart"
          srcSet={`${ivf05x} 960w, ${ivf1x} 1920w, ${ivf2x} 3840w`}
          img={ivf1x}
          alt="importance vs feasibility chart"
        />

        <SingleImageWithHeader
          id="compLogos"
          hText="Competitive Logo's:"
          srcSet={`${compLogos05x} 960w, ${compLogos1x} 1920w, ${compLogos2x} 3840w`}
          img={compLogos1x}
          alt="competitive logos"
        />

        <SingleImageWithHeader
          id="compWebsites"
          hText="Competitive Websites:"
          srcSet={`${compPage05x} 960w, ${compPage1x} 1920w, ${compPage2x} 3840w`}
          img={compPage05x}
          alt="competitive websites"
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
        />

        <SingleImageWithHeader
          id="journeyPath"
          hText="Extended Journey Map (Initial User):"
          srcSet={`${journeyMap05x} 960w, ${journeyMap1x} 1920w, ${journeyMap2x} 3840w`}
          img={journeyMap05x}
          alt="Initial User example Journey Map"
        />

        <SingleImageWithHeader
          id="moodBoard"
          hText="Mood Board:"
          srcSet={`${moodBoard05x} 960w, ${moodBoard1x} 1920w, ${moodBoard2x} 3840w`}
          img={moodBoard05x}
          alt="Everyday Zen Website & Logo Mood Board"
        />

        <SingleImageWithHeader
          id="siteMap"
          hText="Site Map:"
          srcSet={`${siteMap05x} 960w, ${siteMap1x} 1920w, ${siteMap2x} 3840w`}
          img={siteMap1x}
          alt="Everyday Zen Website - Site Map"
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
                />
              );
            })}
          </div>
        </Row>

        <Row noGutters className="headingWithLink" id="prototype">
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
                />
              );
            })}
          </div>
        </Row>
      </Container>
    </>
  );
}
