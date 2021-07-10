import { Container, Image, Row, Col } from "react-bootstrap";

import { certificationData } from "../../util-data/certificationData";

function SingleCert({ hText, iSrc, iSrcSet, iAlt, link, linkSecondary }) {
  return (
    <Col lg={6} className="singleCertOuter">
      <Row className="singleCertInner">
        <Col xl={5} className="leftCol">
          <h2>{hText}</h2>
        </Col>

        <Col className="imgCol">
          <Image srcSet={iSrcSet} src={iSrc} alt={iAlt} />
        </Col>

        <Col xs={12} className="linkCol">
          <a rel="noreferrer" target="_blank" href={link}>
            {String(link).slice(8)}
          </a>
          {linkSecondary ? <p>{linkSecondary}</p> : null}
        </Col>
      </Row>
    </Col>
  );
}

export default function Certs() {
  return (
    <>
      <Container fluid id="certifications" className="certs-main-container">
        <Container>
          <h1 className="sectionHeading">Certifications</h1>
        </Container>

        <Row className="cert-row">
          {certificationData.map((d, index) => {
            return (
              <SingleCert
                key={index}
                hText={d.hText}
                iSrc={d.iSrc}
                iSrcSet={d.iSrcSet}
                iAlt={d.iAlt}
                link={d.link}
                linkSecondary={d.linkSecondary ? d.linkSecondary : null}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}
