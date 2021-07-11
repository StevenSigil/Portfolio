import { Container, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import PDF from "../../public/static/media/stevenE_publicResume.pdf";

import bgImg1 from "../../public/static/media/mainBg/16x9/Main@0.25x.png";
import bgImg2 from "../../public/static/media/mainBg/16x9/Main@0.5x.png";
import bgImg3 from "../../public/static/media/mainBg/16x9/Main@0.75x.png";
import bgImg4 from "../../public/static/media/mainBg/16x9/Main@1x.png";
import bgImg5 from "../../public/static/media/mainBg/16x9/Main@1.25x.png";

function HomeHeading() {
  const bgImgSrcSet = `${bgImg1} 525w, ${bgImg2} 1050w, ${bgImg3} 1575w, ${bgImg4} 2100w, ${bgImg5} 2625w`;

  return (
    <>
      <Container fluid className="topRow-container">
        <img
          srcSet={bgImgSrcSet}
          src={bgImg1}
          alt="Background Image"
          typeof="image/png"
          sizes="100vw"
        />

        <h1>STEVEN ELLIOTT</h1>

        <div className="linkDiv">
          <Col sm={3} xs={6} className="">
            <a href="#my-summary">Who I am</a>
          </Col>
          <Col sm={3} xs={6} className="">
            <a href="#projects-heading">Projects</a>
          </Col>
          <Col sm={3} xs={6} className="">
            <a href="#certifications">Certifications</a>
          </Col>
          <Col sm={3} xs={6} className="">
            <a href={PDF}>Resume</a>
          </Col>

          {/* <Col sm={3} xs={6} className="">
            <Link to="/EdZen2">EdZ</Link>
          </Col> */}
        </div>
      </Container>
    </>
  );
}

export default HomeHeading;
