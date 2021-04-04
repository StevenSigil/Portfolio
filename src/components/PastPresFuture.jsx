import { Container, Col, Row, Image } from "react-bootstrap";
import HourglassBottom from "../public/static/media/logos-icons/hourglass-bottom.svg";
import HourglassSplit from "../public/static/media/logos-icons/hourglass-split.svg";
import Hourglass from "../public/static/media/logos-icons/hourglass.svg";

function PastPresFuture() {
  return (
    <>
      <Container fluid className="r2-main-container" id="my-summary">
        <Row className="sectionOuterRow sectionHeading">
          <Container className="coloredBorderDiv">
            <Container
              className="whiteOverRainbowContainer"
              style={{ padding: "1rem" }}
            >
              <h1>My Summary</h1>
            </Container>
          </Container>
        </Row>

        <Row md={2} className="sectionOuterRow">
          <Container className="coloredBorderDiv">
            <Container className="whiteOverRainbowContainer">
              <Row noGutters className="sectionInnerRow">
                <Col md={3} className="smallerCol">
                  <h2>Past</h2>
                  <Image
                    src={HourglassBottom}
                    alt="Bottom filled hourglass"
                    width="150"
                    height="150"
                  />
                </Col>
                <Col md={8}>
                  <p>
                    I have always had an eye for detail. In 2014, an opportunity
                    to focus my detail skills came to be in the form of digital
                    media and graphic design. I took the opportunity to attend
                    that vocational school and learned how to create things that
                    people liked. Being young and rebellious, as soon as school
                    was concluded, I dropped it all to pursue a career climbing
                    corporate ladders. Very quickly, it became apparent the
                    ladders were slick, hard to hang on to, and usually leading
                    to a cliff.
                    <br />
                    <br />
                    Eventually, I could not ignore the inner voice who was
                    screaming "This isn't you!". I put my pride to the side and
                    became reacquainted with multi-media in my free time while
                    serving as a manager in a retail environment.
                    <br />
                    <br />
                    While still in a managerial role, I decided it could be
                    useful to know more about working with large amounts of
                    data. This led me to begin using Python for data-analysis.
                    After a while, it was getting rather boring to get the
                    answers to a question but have no one be impressed. This led
                    to me building web interfaces that acted as "interactive
                    reports". Integrating more practices from the digital media
                    skills I had, I realized the time came to be done walking
                    the path I was on and travel the original road I was meant
                    to be on.
                    <br />
                    <br />A few weeks after that realization, I left my job, and
                    spent the next few months learning to code.
                    {/* For years, I have been working to make headway in the
                  corporate world. While on that path, certain circumstances
                  kept coming up, poking at me, saying "This isn't you!"
                  Eventually I decided to put my pride to the side and do what I
                  should have been doing years ago. <br /> Learn to code! */}
                  </p>
                </Col>
              </Row>
            </Container>
          </Container>
        </Row>

        <Row md={2} className="sectionOuterRow">
          <Container className="coloredBorderDiv">
            <Container className="whiteOverRainbowContainer">
              <Row noGutters className="sectionInnerRow">
                <Col md={3} className="smallerCol">
                  <h2>Present</h2>
                  <Image
                    src={HourglassSplit}
                    alt="Pouring hourglass"
                    width="150"
                    height="150"
                  />
                </Col>
                <Col md={8}>
                  <p>
                    Since my past realizations, I've decided the quickest way to
                    break into the 'Tech' industry, given my work ethic, was to
                    enroll in self-paced bootcamps. I am happy to say I have
                    completed multiple bootcamp style corses in under 4 months,
                    and am on track to completing 2 more by the end of March!
                    Additionally, I have been busy using the skills gained to
                    build applications that are interesting, or fulfill a need
                    for another person.
                  </p>
                </Col>
              </Row>
            </Container>
          </Container>
        </Row>

        <Row md={2} className="sectionOuterRow">
          <Container className="coloredBorderDiv">
            <Container className="whiteOverRainbowContainer">
              <Row noGutters className="sectionInnerRow">
                <Col md={3} className="smallerCol">
                  <h2>Future</h2>

                  <Image
                    src={Hourglass}
                    alt="Empty hourglass"
                    width="150"
                    height="150"
                  />
                </Col>
                <Col md={8}>
                  <p>
                    Looking ahead, it is clear to me that working on a hardware
                    level is a goal worth achieving. I plan to begin study of
                    the C language and hope to implement those skills to
                    software controlled hardware. My dabblings in
                    algorithms/machine learning has lit a flame in me to create
                    projects that allow everyday tasks people do, made easier. I
                    think technologies like Alexa are a great start to goals
                    like mine, however they seem to lack something on the user
                    level. I want to find and fix those problems, build public
                    trust in such technologies, and work for a sustainable,
                    advanced future for everyone.
                  </p>
                </Col>
              </Row>
            </Container>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default PastPresFuture;
