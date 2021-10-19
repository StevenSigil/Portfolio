import React from "react";
import { Link } from "react-router-dom";
import { Col, Container } from "react-bootstrap";

import "../../public/static/css/arts.css";

import { ReactComponent as LinkIcon } from "../../public/static/media/logos-icons/Link-Square.svg";

// import { ReactComponent as EZFlower } from "../../public/static/media/arts/EZFlower.svg";

// import utopia350 from "../../public/static/media/arts/utopia/utopia-350w.png";

// import { ReactComponent as FRQ } from "../../public/static/media/arts/The FRQ - Main - NO BG.svg";

// import marketingStatsAll from "../../public/static/media/arts/marketing-infoGraphics/marketingStatsAll@650w.png";

// import castleDreams01x from "../../public/static/media/arts/castleDreams/Castle Dreams@0.1x.png";

// import dpiThumb from "../../public/static/media/arts/videoThumbnails/DPIIntroThumb.png";
// import ldrThumb from "../../public/static/media/arts/videoThumbnails/LDRThumb.png";
// import sleepingTigersThumb from "../../public/static/media/arts/videoThumbnails/sleepingTigersThumb.png";
// import sunOverThumb from "../../public/static/media/arts/videoThumbnails/sunOverPlaneThumb.png";

export default function ArtsHome() {
  // const videoPages = {
  //   dpi: "/digitalMedia/dpicorp",
  //   ldr: "/digitalMedia/ldrobots",
  //   tigers: "/digitalMedia/stigers",
  //   sun: "/digitalMedia/sunoverplane",
  // };

  return (
    <>
      <div className="staticCover">
        <h1>Coming Soon...</h1>
      </div>
      {/* <div className="artsStyles">
        <h1>ARTS</h1>

        <div id="EZFlower" className="imgReplacedOnHover">
          <EZFlower />

          <div className="replacesImg">
            <h3>EZFlower</h3>
          </div>
        </div>

        <div id="Utopia">
          <img src={utopia350} />
          <h3>Utopia Digital Flyer</h3>
        </div>

        <div id="FRQ">
          <FRQ />
          <h3>109FM - THE FRQ</h3>
        </div>

        <div id="marketStatsOuter">
          <img src={marketingStatsAll} />
          <h3>Info Graphics</h3>
        </div>

        <div id="castleDreams">
          <img src={castleDreams01x} />
          <h3>Castle Dreams</h3>
        </div>

        <Container fluid className="videoThumbnailSection">
          <h2>Videos, Animations, After Effects, Etc...</h2>

          <SingleVideoComponent
            imgSrc={dpiThumb}
            hText="DPI Prod. Corp. Sequence"
            pageLink={videoPages.dpi}
          />

          <SingleVideoComponent
            imgSrc={ldrThumb}
            hText="Love Death + Robots Title Re-Creation"
            pageLink={videoPages.ldr}
          />

          <SingleVideoComponent
            imgSrc={sleepingTigersThumb}
            hText="Sleeping Tigers Spotify Canvas Demo"
            pageLink={videoPages.tigers}
          />

          <SingleVideoComponent
            imgSrc={sunOverThumb}
            hText="Sun Over Electric Plane"
            pageLink={videoPages.sun}
          />
        </Container>
      </div> */}
    </>
  );
}

export function SingleVideoComponent({ imgSrc, hText, pageLink }) {
  return (
    <Col lg={6} className="singleWrappedCol">
      <Link to={pageLink} className="videoInner">
        <div className="videoThumbContainer">
          <LinkIcon className="globalLinkIcon" />
          <img className="videoThumbImg" src={imgSrc} />
        </div>

        <h3>{hText}</h3>
      </Link>
    </Col>
  );
}
