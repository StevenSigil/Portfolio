import { Container, Col, Row } from "react-bootstrap";

function HomeHeading() {
  return (
    <>
      <Container fluid className="topRow-container">
        <Row>
          <Col sm={8} xs={12} className="topRow-nameItem">
            <h1>STEVEN ELLIOTT</h1>
          </Col>
          <Col sm={4} xs={12} className="topRow-list">
            <p>
              <a href="#web-design"> Web Design </a>
            </p>
            <p>
              <a href="#python-programming">Python Programming</a>
            </p>
            <p>Team Leader</p>
            <p>
              <a href="#certifications">Independent Learning</a>
            </p>
          </Col>
        </Row>

        {/* <Col sm={3} className='topRow-textItem'>
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
          </p>
        </Col> */}
      </Container>
    </>
  );
}

export default HomeHeading;
