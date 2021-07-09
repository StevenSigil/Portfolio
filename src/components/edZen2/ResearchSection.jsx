import React from "react";
import { Container, Col } from "react-bootstrap";

import ivfTable from "../../public/static/media/edZen_imgs/ivfPlot/ivfTable.svg";
import ivfPlot05x from "../../public/static/media/edZen_imgs/ivfPlot/ivfPlot@0.5x.png";
import ivfPlot075x from "../../public/static/media/edZen_imgs/ivfPlot/ivfPlot@0.75x.png";

import persona1 from "../../public/static/media/edZen_imgs/userPersonas/persona1.svg";
import persona2 from "../../public/static/media/edZen_imgs/userPersonas/persona2.svg";
import persona3 from "../../public/static/media/edZen_imgs/userPersonas/persona3.svg";

import compPages05x from "../../public/static/media/edZen_imgs/CompPages/compPages@0.5x.png";
import compPages075x from "../../public/static/media/edZen_imgs/CompPages/compPages@0.75x.png";
import compPages1x from "../../public/static/media/edZen_imgs/CompPages/compPages@1x.png";

import journeyMap2 from "../../public/static/media/edZen_imgs/JourneyMap/newJourneyMap.svg";

import siteMap from "../../public/static/media/edZen_imgs/SiteMap/newSiteMap.svg";

import moodBoard1x from "../../public/static/media/edZen_imgs/MoodBoard/newMoodBoard@1x.png";

export default function ResearchSection({ handleImageClick }) {
  return (
    <div>
      <Business />
      <UsersSection imgClickFunc={handleImageClick} />
      <CompetitorSection imgClickFunc={handleImageClick} />
      <JourneyMapSection imgClickFunc={handleImageClick} />
      <SiteMapSection imgClickFunc={handleImageClick} />
      <MoodBoardSection imgClickFunc={handleImageClick} />
    </div>
  );
}

function Business() {
  return (
    <Container className="researchSection">
      <h2>Research</h2>

      <div className="businessResearch">
        <Col lg={7} className="textArea1">
          <h3>Getting everyone on the same page clarified our objectives</h3>

          <p>
            At this early stage of development, it was crucial to declare what
            exactly the goals of Everyday Zen were in regards to this project.
            After a large list of wants and needs was produced, an overall theme
            was agreed upon.{" "}
          </p>

          <p>
            That theme was to
            <strong>
              {" "}
              continue keeping the audience focused on content, engagement with
              the authors, and sharing content on third party sites.{" "}
            </strong>{" "}
          </p>

          <p>
            Doing this, it is expected to see an increase in email subscriptions
            and sales naturally given an efficient route to get there.
          </p>

          <p>
            To further increase specificity of project needs, four main
            objectives were concluded, then ranked to compare the importance of
            the objective and the feasibility of the objective. These results,
            once plotted, were surprising to the client's team and helped keep
            everyone's perspective on the project needs.
          </p>
        </Col>

        <Col lg={4} className="nonTextArea1">
          <img
            className="img1"
            src={ivfTable}
            alt="Importance Vs. Feasibility Table"
          />

          <img
            className="img2"
            srcSet={`${ivfPlot05x} 330w, ${ivfPlot075x} 495w`}
            src={ivfPlot05x}
            alt="Importance Vs. Feasibility Chart"
          />
        </Col>
      </div>
    </Container>
  );
}

function UsersSection({ imgClickFunc }) {
  return (
    <Container className="userResearch">
      <Col lg={4} className="usersHeading">
        <h3>
          Randomly selected users find high value in the articles and
          experienced a sense of positive emotion
        </h3>
      </Col>
      <Col lg={8} className="userTextArea">
        <p>
          A series of user surveys were sent out to randomly selected visitors
          of Everyday Zen, generating a mixture of loyal customers as well as
          first time visitors.{" "}
        </p>
        <p style={{ marginBottom: "1rem" }}>
          Aggregating the user's responses, four consistent themes were noticed:
        </p>

        <ul>
          <li>
            The customer is someone who believes{" "}
            <strong>reading the content is a valuable use of time</strong> and
            goes out of their way to keep up with the posts.
          </li>
          <li>
            The customer is someone who{" "}
            <strong>engages with the content regularly</strong>.
          </li>
          <li>
            The customer feels a <strong>connection with the author</strong> of
            any particular article.
          </li>
          <li>
            The customer uses the website to{" "}
            <strong>feel a sense of understanding</strong>.
          </li>
        </ul>

        <p>
          From these results, 3 mock-user persona's were made as a reference of
          who will be using this website.
        </p>
      </Col>

      <Col lg={12} className="hScrollGroup">
        <div className="innerWrapper">
          <img
            src={persona2}
            alt="User Persona 1"
            onClick={() => imgClickFunc(persona2, null, "User Persona 1")}
          />
          <img
            src={persona1}
            alt="User Persona 2"
            onClick={() => imgClickFunc(persona1, null, "User Persona 2")}
          />
          <img
            src={persona3}
            alt="User Persona 3"
            onClick={() => imgClickFunc(persona3, null, "User Persona 3")}
          />
        </div>
      </Col>
    </Container>
  );
}

function CompetitorSection({ imgClickFunc }) {
  const imgSrcSet = `${compPages05x} 688w, ${compPages075x} 1032w, ${compPages1x} 1377w`;

  return (
    <Container className="competitiveAnalysis">
      <Col lg={7} className="compAnalysisImgArea">
        <h3>
          An Emphasis on a Unique Layout and Avoiding Generic Wordpress-like
          Elements Differentiates this Project from the Competition
        </h3>

        <img
          srcSet={imgSrcSet}
          src={compPages05x}
          alt="Everyday Zen - Competitive Websites"
          onClick={() =>
            imgClickFunc(compPages05x, imgSrcSet, "Competitive Websites")
          }
        />
      </Col>

      <Col lg={5} className="compAnalysisTextArea">
        <h4>Key Takeaways from Competitive Webpages:</h4>

        <ul>
          <li>
            Most competitive websites follow a rigid structure based around{" "}
            <strong>
              compacting elements to the middle of the page, without clearly
              defined section spacing
            </strong>
            .
          </li>

          <li>
            General <strong>styles</strong> of websites were close to or exactly{" "}
            <strong>identical in terms of colors, fonts, etc...</strong>
          </li>

          <li>
            <strong>Images are prominently displayed</strong> on home pages and
            often consume 100% of the screen in articles.
          </li>

          <li>
            Articles should <strong>drive traffic</strong> to Everyday Zen's
            <strong> social media channels </strong> to further engage the
            audience and further solidify brand identity.
          </li>
        </ul>
      </Col>
    </Container>
  );
}

function JourneyMapSection({ imgClickFunc }) {
  return (
    <Container className="journeyMap">
      <h3>KPI's Show New Audience Members Arrive from Third Party Links</h3>
      <div className="journeyTextArea">
        <Col lg={5}>
          <p>
            A Journey Map mixed with a User Flow was made, representing the most
            likely path a new audience member would take given the above user
            research.
          </p>
        </Col>

        <Col lg={5}>
          <p>
            A user's primary goal is inferred to be getting to an article. This
            shows the company's idea of prioritizing content over pushing
            products is inline with the customer's expectations - meaning a
            better experience for the user!
          </p>
        </Col>
      </div>
      <div className="journeyImgOuter">
        <img
          src={journeyMap2}
          alt="Users Journey Map"
          onClick={() => imgClickFunc(journeyMap2, null, "Journey Map", true)}
        />
      </div>
    </Container>
  );
}

function SiteMapSection({ imgClickFunc }) {
  return (
    <Container className="siteMap">
      <Col xl={3} lg={4} className="siteMapHead">
        <h3>Key Navigation Paths and Most Important Content were Defined</h3>
      </Col>

      <Col xl={9} lg={8} className="siteMapImgOuter">
        <img
          src={siteMap}
          alt="Everyday Zen's new site map"
          onClick={() =>
            imgClickFunc(siteMap, null, "Everyday Zen's new site map", true)
          }
        />
      </Col>
    </Container>
  );
}

function MoodBoardSection({ imgClickFunc }) {
  return (
    <Container className="moodBoard">
      <Col xl={6} lg={8} className="moodTextArea">
        <h3>
          A Mood Board was Created to Define the Style of the Websites as
          Minimalistic, Earthy Toned and High Contrast
        </h3>
      </Col>

      <Col lg={10} className="moodBoardImgCont">
        <img
          src={moodBoard1x}
          alt="Everyday Zen's new Mood Board"
          onClick={() =>
            imgClickFunc(moodBoard1x, null, "Everyday Zen's new Mood Board")
          }
        />
      </Col>
    </Container>
  );
}
