import { Container, Col, Row } from "react-bootstrap";

import { ReactComponent as HourglassBottom } from "../../public/static/media/logos-icons/hourglass-bottom.svg";
import { ReactComponent as HourglassSplit } from "../../public/static/media/logos-icons/hourglass-split.svg";
import { ReactComponent as EmptyHourglass } from "../../public/static/media/logos-icons/hourglass.svg";

function PastPresFuture() {
  return (
    <>
      <Container className="r2-main-container" id="my-summary">
        <h2 className="sectionHeading">My Summary</h2>

        <div className="coloredOuterDiv">
          <Row>
            <Col md={3} className="smallerCol2">
              <h2>Past</h2>
              <HourglassBottom />
            </Col>
            <Col md={9} className="textArea">
              <p>
                I have always had an eye for detail. In 2014, an opportunity to
                expand on detail-oriented skills was presented in the form of
                digital media and graphic design. I took the opportunity and
                attended vocational school where I learned how to effectively
                communicate through a visual medium. Being young and rebellious,
                as soon as school was concluded, I dropped it all to pursue a
                career climbing corporate ladders. Very quickly, it became
                apparent the ladders were slick, hard to hang on to, and usually
                lead to a cliff.
              </p>

              <p>
                Eventually, I could not ignore the inner voice screaming "This
                isn't you!". I put my pride to the side and became reacquainted
                with multi-media in my free time while serving as an executive
                manager in a retail environment.
              </p>

              <p>
                While still in a managerial role, I decided it would be useful
                to know more about working with large amounts of data. This led
                me to begin using Python for data-analysis. After a while, it
                was getting rather boring and frustrating to get answers to
                questions that would improve our business efforts, without a
                means of communicating the findings. This led to me building web
                interfaces that acted as "interactive reports" and allowed me to
                learn to integrate more practices from the digital media skills
                previously acquired. After a while of trying, failing, and
                trying again, I realized the time came to be done walking the
                corporate path and travel the original road I was meant to be
                on.
              </p>

              <p style={{ textIndent: "initial" }}>
                A few weeks after that realization, I left my job, and spent the
                next several months learning to code...
              </p>
              {/* For years, I have been working to make headway in the
                  corporate world. While on that path, certain circumstances
                  kept coming up, poking at me, saying "This isn't you!"
                  Eventually I decided to put my pride to the side and do what I
                  should have been doing years ago. <br /> Learn to code! */}
            </Col>
          </Row>
        </div>

        <div className="coloredOuterDiv">
          <Row>
            <Col md={3} className="smallerCol2">
              <h2>Present</h2>
              <HourglassSplit />
            </Col>
            <Col md={9} className="textArea">
              <p>
                Over these last several months, I have completed two in-depth
                courses covering the Python language, 2 courses using Python
                with Jupyter to perform data analysis and learn best practices
                for those jobs, a course covering almost all aspects of
                front-end development and NoSQL databases (including JavaScript,
                React, Express, MongoDB, authentication techniques, design
                specific best practices, etc...), a course covering backend (and
                some frontend) development using Django and
                Django-Rest-Framework, amongst a few smaller courses.
              </p>
              <br />
              <p>
                Using what I have learned, I have
                <a href="#projects-heading"> created multiple projects </a>
                to solidify and expand upon my understanding of these
                technologies. For{" "}
                <a href="https://medication-track.herokuapp.com/">example</a>,
                figuring out how to use RESTful APIs to communicate between
                frameworks and Responsive styling to create cross-platform
                applications. Now, I seek to contribute value to a team &
                organization that believes in growing in your roll, knowledge,
                and experience; while providing an opportunity to use the skills
                their development teams have, to create new, interesting, and
                useful products for their customers.
              </p>
              {/* <p>
                    Since my past realizations, I've decided the quickest way to
                    break into the 'Tech' industry, given my work ethic, was to
                    enroll in self-paced bootcamps. I am happy to say I have
                    completed multiple bootcamp style corses in under 4 months,
                    and am on track to completing 2 more by the end of March!
                    Additionally, I have been busy using the skills gained to
                    build applications that are interesting, or fulfill a need
                    for another person.
                  </p> */}
            </Col>
          </Row>
        </div>

        <div className="coloredOuterDiv">
          <Row>
            <Col md={3} className="smallerCol2">
              <h2>Future</h2>
              <EmptyHourglass />
            </Col>
            <Col md={9} className="textArea">
              <p>
                After long deliberations over things such as The Butterfly
                Effect (phenomenon - not the movie), I no longer speculate on
                future events. That said, goals are important to give meaning to
                what we do. Below are some my shorter-term goals.
              </p>
              <br />
              <ul>
                <li>
                  <p>
                    Become a valued member of an organization which thrives in a
                    fast-paced, preferably Agile/Scrum, environment.
                  </p>
                </li>
                <li>
                  <p>
                    Expand upon previous experience in marketing and customer
                    outreach (on a corporate level) via multi-media, especially
                    web-based, communications.
                  </p>
                </li>

                <li>
                  <p>
                    Utilize, integrate, and stay up to date on cutting edge
                    frameworks and technologies to create and improve
                    products/services that bring value to people’s lives.
                  </p>
                </li>
                <li>
                  <p>
                    Begin study of hardware and creating software to control
                    automated, physical systems.
                  </p>
                </li>
              </ul>
              {/* <p>
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
                  </p> */}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default PastPresFuture;
