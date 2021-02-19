import { Container, Col, Row, Image } from "react-bootstrap";
import HourglassBottom from '../public/static/media/logos-icons/hourglass-bottom.svg';
import HourglassSplit from '../public/static/media/logos-icons/hourglass-split.svg';
import Hourglass from '../public/static/media/logos-icons/hourglass.svg';

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

                <Image src={HourglassBottom} alt="Bottom filled hourglass" width="75" height='75'/>

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

                <Image src={HourglassSplit} alt="Pouring hourglass"  width="75" height='75' />

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

                <Image src={Hourglass} alt="Empty hourglass"  width="75" height='75' />

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
