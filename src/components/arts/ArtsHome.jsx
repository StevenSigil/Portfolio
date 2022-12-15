import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import "../../public/static/css/arts.css";
import { ReactComponent as LinkIcon } from "../../public/static/media/logos-icons/Link-Square.svg";

// =========
import r1 from "../../public/static/media/arts/facing_imgs/Robots/1.png";
import r2 from "../../public/static/media/arts/facing_imgs/Robots/2.png";
import r3 from "../../public/static/media/arts/facing_imgs/Robots/3.png";

import PVCoffee from "./sectionComps/PVCoffee";
import Brujet from "./sectionComps/Brujet";
import PipBoy from "./sectionComps/PipBoy";
import EdZen from "./sectionComps/EdZen";
import Caligraphy from "./sectionComps/Caligraphy";
import InfoGraphics from "./sectionComps/InfoGraphics";
import MiscGraphics from "./sectionComps/MiscGraphics";
import PhotoEdits from "./sectionComps/PhotoEdits";
import Footer from "../Footer";

import dpiThumb from "../../public/static/media/arts/videoThumbnails/DPIIntroThumb.png";
import ldrThumb from "../../public/static/media/arts/videoThumbnails/LDRThumb.png";
import sleepingTigersThumb from "../../public/static/media/arts/videoThumbnails/sleepingTigersThumb.png";
import sunOverThumb from "../../public/static/media/arts/videoThumbnails/sunOverPlaneThumb.png";

function VideoModal({ url, handleClose }) {
  function closeModal() {
    document.documentElement.style.overflow = "scroll";
    document.body.scroll = "yes";
    handleClose();
  }
  return (
    <div className="videoModalOuter" onClick={closeModal}>
      <Container>
        <iframe
          id="lbry-iframe"
          width="640"
          height="360"
          src={url}
          allowFullScreen
          loading="eager"
          title="Sun Over Electric Plane">Loading...</iframe>
      </Container>
      <Button className="closeBtn" variant="outline-light" onClick={closeModal}>
        Close
      </Button>
    </div>
  );
}

export default function ArtsHome() {
  const [videoShowing, setVideoShowing] = useState(false);
  const [videoURL, setVideoURL] = useState("");

  function readyVideo(url) {
    setVideoURL(url);
    setVideoShowing(true);
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
  }

  return (
    <>
      {/* <div className="staticCover">
        <h1>Coming Soon...</h1>
      </div> */}

      {videoShowing ? (
        <VideoModal url={videoURL} handleClose={setVideoShowing} />
      ) : null}

      <div className="artsStyles">
        <div className="artHead">
          <img
            srcset="/static/media/Main@0.25x.14ab0ae8.png 525w, /static/media/Main@0.5x.13795f19.png 1050w, /static/media/Main@0.75x.d13d49c1.png 1575w, /static/media/Main@1x.5b33922a.png 2100w, /static/media/Main@1.25x.4e22d1f4.png 2625w"
            src="/static/media/Main@0.25x.14ab0ae8.png"
            alt="Background"
            typeof="image/png"
            sizes="100vw"></img>

          <div className="title">
            <h1>Digital Media</h1>
            <h2>by Steven Elliott</h2>
          </div>

          <div className="linkDiv">
            <Col md={4} sm={6} className="linkCol">
              <HashLink smooth to="#graphics">
                Graphic Design
              </HashLink>
            </Col>
            <Col md={4} sm={6} className="linkCol">
              <HashLink smooth to="#photos">
                Photography/Editing
              </HashLink>
            </Col>
            <Col md={4} sm={6} className="linkCol">
              <HashLink smooth to="#animVid">
                Animated Video
              </HashLink>
            </Col>
          </div>

          <p>
            Please note, more projects are expected to be added in the near
            future.
          </p>
        </div>

        <PVCoffee />

        <Brujet />

        <Container className="secContainer">
          <h2>Love Death & Robots Title Recreation</h2>

          <div className="singleWide">
            <img src={r1} alt="Love Death Robots 1" />

            <Row noGutters className="halfRowImgContainer">
              <img src={r2} className="halfRowImg" alt="Love Death Robots 2" />
              <img src={r3} className="halfRowImg" alt="Love Death Robots 3" />
            </Row>

            <Button
              type="button"
              variant="primary"
              onClick={() =>
                readyVideo(
                  "https://odysee.com/$/embed/LDRTitleSeq/825150704a7eaebd465ddf68422ab1883c2c9cf2?r=AHRiRLY4uphixu1AYFP9Kqgs5vyyroVH"
                )
              }>
              View Fianl Video
            </Button>
          </div>
        </Container>

        <PipBoy />

        <EdZen />

        <Caligraphy />

        <InfoGraphics />

        <MiscGraphics />

        <PhotoEdits />

        <Container className="secContainer" id="animVid">
          <h2>
            Animated Videos <small>(click to play)</small>
          </h2>

          <div className="doubleWide videoImgOuter">
            <img
              src={dpiThumb}
              alt="DPI Intro"
              onClick={() =>
                readyVideo(
                  "https://odysee.com/$/embed/DPICorp/e793b8a4ccec8a552a5644e12918a013b412bab0?r=AHRiRLY4uphixu1AYFP9Kqgs5vyyroVH"
                )
              }
            />
            <img
              src={ldrThumb}
              alt="Love Death + Robots"
              onClick={() =>
                readyVideo(
                  "https://odysee.com/$/embed/LDRTitleSeq/825150704a7eaebd465ddf68422ab1883c2c9cf2?r=AHRiRLY4uphixu1AYFP9Kqgs5vyyroVH"
                )
              }
            />
            <img
              src={sleepingTigersThumb}
              alt="Sleeping Tigers Loop"
              onClick={() =>
                readyVideo(
                  "https://odysee.com/$/embed/sleepingtigersspotifycanvas1/959dcd7a264a6dd48b0b976949893990a746c3d5?r=AHRiRLY4uphixu1AYFP9Kqgs5vyyroVH"
                )
              }
            />
            <img
              src={sunOverThumb}
              alt="Sun Over Electric Plane"
              onClick={() =>
                readyVideo(
                  "https://odysee.com/$/embed/SunOverElectricPlane/a7737326ab73f14c0d23cb3c6671db142c4e6469?r=AHRiRLY4uphixu1AYFP9Kqgs5vyyroVH"
                )
              }
            />
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export function SingleVideoComponent({ imgSrc, hText, pageLink }) {
  return (
    <Col lg={6} className="singleWrappedCol">
      <Link to={pageLink} className="videoInner">
        <div className="videoThumbContainer">
          <LinkIcon className="globalLinkIcon" />
          <img className="videoThumbImg" src={imgSrc} alt="" />
        </div>

        <h3>{hText}</h3>
      </Link>
    </Col>
  );
}

// {/* <div id="EZFlower" className="imgReplacedOnHover">
//           <EZFlower />

//           <div className="replacesImg">
//             <h3>EZFlower</h3>
//           </div>
//         </div>

//         <div id="Utopia">
//           <img src={utopia350} />
//           <h3>Utopia Digital Flyer</h3>
//         </div>

//         <div id="FRQ">
//           <FRQ />
//           <h3>109FM - THE FRQ</h3>
//         </div>

//         <div id="marketStatsOuter">
//           <img src={marketingStatsAll} />
//           <h3>Info Graphics</h3>
//         </div>

//         <div id="castleDreams">
//           <img src={castleDreams01x} />
//           <h3>Castle Dreams</h3>
//         </div> */}

//         {/* <div>
//           <iframe width="640" height="360" title="Animated menu and background."  src="https://xd.adobe.com/embed/d34e14a2-43c8-4e42-b35f-37e2af890d63-861d/?fullscreen" frameBorder="0" allowFullScreen></iframe>
//           <h3>Animated Menu and Background</h3>
//         </div> */}

//         {/* <Container fluid className="videoThumbnailSection">
//           <h2>Videos, Animations, After Effects, Etc...</h2>

//           <SingleVideoComponent
//             imgSrc={dpiThumb}
//             hText="DPI Prod. Corp. Sequence"
//             pageLink={videoPages.dpi}
//           />

//           <SingleVideoComponent
//             imgSrc={ldrThumb}
//             hText="Love Death + Robots Title Re-Creation"
//             pageLink={videoPages.ldr}
//           />

//           <SingleVideoComponent
//             imgSrc={sleepingTigersThumb}
//             hText="Sleeping Tigers Spotify Canvas Demo"
//             pageLink={videoPages.tigers}
//           />

//           <SingleVideoComponent
//             imgSrc={sunOverThumb}
//             hText="Sun Over Electric Plane"
//             pageLink={videoPages.sun}
//           />
//         </Container> */}
