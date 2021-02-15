import { Container, Image, Row, Col } from "react-bootstrap";

// Images
import SciComp from "../public/static/media/certs/0.75x/Scientific-Computing_fCC.png";
import DataAnalysis from "../public/static/media/certs/0.75x/Data-Analysis_fCC.png";
import PyBasic from "../public/static/media/certs/0.75x/Python-Basic.png";
import Postgres from "../public/static/media/certs/0.75x/Postgre-Python.png";
import Django from "../public/static/media/certs/0.75x/Django.png";
import WebDev from "../public/static/media/certs/0.75x/Web-Dev.png";

import Flash from "../public/static/media/certs/0.75x/Flash-2013.png";
import Illustrator from "../public/static/media/certs/0.75x/Illustrator-2013.png";
import InDesign from "../public/static/media/certs/0.75x/InDesign-2014.png";
import Photoshop from "../public/static/media/certs/0.75x/Photoshop-2013.png";
import Premiere from "../public/static/media/certs/0.75x/Premiere-2014.png";

function Certs() {
  return (
    <>
      <Container fluid id="certifications" className="certs-main-container">
        <h1>Certifications</h1>
        <Row noGutters className="full-row">
          <Col>
            <Row className="img-row">
              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>Web development</h2>
                    {/* <h3>(2021)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={WebDev}
                      alt="Steven E. Web Development Bootcamp"
                      width="100%"
                      height="100%"
                    />
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>
                      Full Stack Development <br /> -Django 3
                    </h2>
                    {/* <h3>(2021)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={Django}
                      alt="Steven E. Django Full Stack Certification"
                      width="100%"
                      height="100%"
                    />
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>PostgreSQL & Python</h2>
                    {/* <h3>(2020)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={Postgres}
                      alt="Steven E. Python and PostgreSQL Certification"
                      width="100%"
                      height="100%"
                    />
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>Python Introductory Bootcamp</h2>
                    {/* <h3>(2020)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={PyBasic}
                      alt="Steven E. Python (general) bootcamp Certification"
                      width="100%"
                      height="100%"
                    />
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>
                      Scientific Computing <br /> -Python{" "}
                    </h2>
                    {/* <h3>(2020)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={SciComp}
                      alt="Steven E. Scientific Computing with Python Certification"
                      width="100%"
                      height="100%"
                    />
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>
                      Data Analysis <br /> -Python
                    </h2>
                    {/* <h3>(2020)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={DataAnalysis}
                      alt="Steven E. Data Analysis with Python Certification"
                      width="100%"
                      height="100%"
                    />
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>
                      Rich Media <br /> -Adobe Flash
                    </h2>
                    {/* <h3>(2013)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={Flash}
                      alt="Steven E. Adobe Flash Certification"
                      width="100%"
                      height="100%"
                    />
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>
                      Graphic Design <br /> -Adobe Illustrator
                    </h2>
                    {/* <h3>(2013)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={Illustrator}
                      alt="Steven E. Adobe Illustrator Certification"
                      width="100%"
                      height="100%"
                    />
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>
                      Media Publication <br /> -Adobe InDesign
                    </h2>
                    {/* <h3>(2014)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={InDesign}
                      alt="Steven E. Adobe InDesign Certification"
                      width="100%"
                      height="100%"
                    />
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>
                      Visual Communication <br /> -Adobe Photoshop
                    </h2>
                    {/* <h3>(2013)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={Photoshop}
                      width="100%"
                      height="100%"
                      alt="Steven E. Adobe Photoshop Certification"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="img-col">
                <Row>
                  <Col md={5}>
                    <h2>
                      Video Communication <br /> -Adobe Premiere
                    </h2>
                    {/* <h3>(2014)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={Premiere}
                      width="100%"
                      height="100%"
                      alt="Steven E. Adobe Premiere Certification"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Certs;
