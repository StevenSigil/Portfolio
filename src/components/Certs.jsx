import { Container, Image, Row, Col } from "react-bootstrap";

// Images
import RWD from "../public/static/media/webp/certs/Responsive-Web-Design_fCC.webp";
import SciComp from "../public/static/media/webp/certs/Scientific-Computing_fCC.webp";
import DataAnalysis from "../public/static/media/webp/certs/Data-Analysis_fCC.webp";
import PyBasic from "../public/static/media/webp/certs/Python-Basic.webp";
import Postgres from "../public/static/media/webp/certs/Postgre-Python.webp";
import Django from "../public/static/media/webp/certs/Django.webp";
import WebDev from "../public/static/media/webp/certs/Web-Dev.webp";
import Flash from "../public/static/media/webp/certs/Flash-2013.webp";
import Illustrator from "../public/static/media/webp/certs/Illustrator-2013.webp";
import InDesign from "../public/static/media/webp/certs/InDesign-2014.webp";
import Photoshop from "../public/static/media/webp/certs/Photoshop-2013.webp";
import Premiere from "../public/static/media/webp/certs/Premiere-2014.webp";

function Certs() {
  return (
    <>
      <Container fluid id="certifications" className="certs-main-container">
        <h1>Certifications</h1>
        <Row noGutters className="full-row">
          <Col>
            <Row className="cert-row">
              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://ude.my/UC-4b570ae2-6661-4205-bd34-891fe5826b29"
                    >
                      ude.my/UC-4b570ae2-6661-4205-bd34-891fe5826b29
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://ude.my/UC-f4aa6f2a-cfec-4d51-aefe-60cf3cf4b204"
                    >
                      ude.my/UC-f4aa6f2a-cfec-4d51-aefe-60cf3cf4b204
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://ude.my/UC-71af8350-c493-42b4-ad09-7166e54fca9b"
                    >
                      ude.my/UC-71af8350-c493-42b4-ad09-7166e54fca9b
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://ude.my/UC-3cf32283-ab46-4532-b49d-6162ae52c16c"
                    >
                      ude.my/UC-3cf32283-ab46-4532-b49d-6162ae52c16c
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="singleitem-col">
                <Row>
                  <Col md={5}>
                    <h2>Responsive Web Design</h2>
                    {/* <h3>(2021)</h3> */}
                  </Col>
                  <Col>
                    <Image
                      src={RWD}
                      alt="Steven E. Responsive Web Design Certification"
                      width="100%"
                      height="100%"
                    />
                  </Col>
                  <Col xs={12} className="cert-link">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.freecodecamp.org/certification/522steven/responsive-web-design"
                    >
                      freecodecamp.org/certification/522steven/responsive-web-design
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://freecodecamp.org/certification/522steven/scientific-computing-with-python-v7"
                    >
                      freecodecamp.org/certification/522steven/scientific-computing-with-python-v7
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.freecodecamp.org/certification/522steven/data-analysis-with-python-v7"
                    >
                      freecodecamp.org/certification/522steven/data-analysis-with-python-v7
                    </a>
                  </Col>
                </Row>
              </Col>

              {/* Adobe */}
              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      href="https://verify.certiport.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      verify.certiport.com
                    </a>
                    <p>enter code: wAMN6-22xr</p>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      href="https://verify.certiport.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      verify.certiport.com
                    </a>
                    <p>enter code: duHD-DTze</p>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      href="https://verify.certiport.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      verify.certiport.com
                    </a>
                    <p>enter code: mdd9-DTzP</p>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      href="https://verify.certiport.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      verify.certiport.com
                    </a>
                    <p>enter code: wLuuM-HanH</p>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="singleitem-col">
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
                  <Col xs={12} className="cert-link">
                    <a
                      href="https://verify.certiport.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      verify.certiport.com
                    </a>
                    <p>enter code: wbzsW-Hany</p>
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
