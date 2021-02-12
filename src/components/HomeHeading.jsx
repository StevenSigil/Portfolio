import { Container, Col } from "react-bootstrap";

function HomeHeading() {
  return (
    <>
      <Container fluid className="topRow-container">
        <Col className="topRow-nameItem" sm={5}>
          <h1>Steven Elliott</h1>
          <p>Web Designer</p>
          <p>Python Developer</p>
          <p>Team Player</p>
          <p>Lifetime Learner</p>
        </Col>

        <Col sm={3} className='topRow-textItem'>
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
          </p>
        </Col>
      </Container>
    </>
  );
}

export default HomeHeading;
