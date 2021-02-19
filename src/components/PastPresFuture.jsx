import { Container, Col, Row } from "react-bootstrap";

function PastPresFuture() {
  return (
    <>
      <Container fluid className="r2-main-container" id="my-summary">
        <Row>
          <Col md={2}>
            <Container className="test-div">
              <Container className="ppf-top summary">
                <h2>My Summary</h2>
              </Container>
            </Container>
          </Col>
          <Col md={2}>
            <Container className="test-div">
              <Container className="ppf-top">
                <h3>Past</h3>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  fill="currentColor"
                  className="bi bi-hourglass-bottom"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z" />
                </svg>

                <p>
                  For years, I have been working to make headway in the
                  corporate world. While on that path, certain circumstances
                  kept coming up, poking at me, saying "This isn't you!"
                  Eventually I decided to put my pride to the side and do what I
                  should have been doing years ago. <br /> Learn to code!
                </p>
              </Container>
            </Container>
          </Col>

          <Col md={2}>
            <Container className="test-div">
              <Container className="ppf-top">
                <h3>Present</h3>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  fill="currentColor"
                  className="bi bi-hourglass-split"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                </svg>

                <p>
                  Since my past realizations, I decided the quickest way to
                  break into the 'Tech' industry, given my work ethic, was to
                  enroll in self-paced bootcamps. I am happy to say I have
                  completed 4 bootcamps in under 4 months, and am on track to
                  completing 2 more by March! Additionally, using the
                  information to build applications that I find interesting, or
                  accomplish a need for another person.
                </p>
              </Container>
            </Container>
          </Col>

          <Col md={2}>
            <Container className="test-div">
              <Container className="ppf-top">
                <h3>Future</h3>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  fill="currentColor"
                  className="bi bi-hourglass"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z" />
                </svg>

                <p>
                  I believe my future looks bright! My current understanding of
                  the languages, modules, packages, etc... that I am currently
                  using proved to me that I can work in this field; I can make a
                  difference in the company that decided to take a chance on me;
                  I can continue to stay educated on the tools that will lead to
                  a better world!
                </p>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PastPresFuture;
