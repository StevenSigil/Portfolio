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
                  Since my past realizations, I've decided the quickest way to
                  break into the 'Tech' industry, given my work ethic, was to
                  enroll in self-paced bootcamps. I am happy to say I have
                  completed multiple bootcamp style corses in under 4 months, and am on track to
                  completing 2 more by the end of March! Additionally, I have been busy using the
                  skills gained to build applications that are interesting, or
                  fulfill a need for another person.
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
                  Looking ahead, it is clear to me that working on a hardware level is a goal worth achieving. I plan to begin study of the C language
                  and hope to implement those skills to software controlled hardware. My dabblings in algorithms/machine learning has lit a flame in me to 
                  create projects that allow everyday tasks people do, made easier.  I think technologies like Alexa are a great start to goals like mine, however
                  they seem to lack something on the user level.  I want to find and fix those problems, build public trust in such technologies, and work for a 
                  sustainable, advanced future for everyone.
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
