import { Card } from "react-bootstrap";

// Card Header Images
import simon from "../public/static/media/simon.png";
import diceGame from "../public/static/media/dice_game.png";
import tinDog from "../public/static/media/tin_dog.png";

import MedTrack from "../public/static/media/drug_keep.png";
import Keeper from "../public/static/media/keeper.png";
import Todo from "../public/static/media/todo-djreact.png";

import Encrypted from "../public/static/media/encryption.png";
import Life from "../public/static/media/glider-static.png";
import Kivy from "../public/static/media/webp/kivy.webp";

// Card Button Footer
import ProjectCardFooter from "./ProjectCardFooter";
import { projectLinks } from "../util-data/project_links";

export function LifeApp() {
  return (
    <Card>
      <Card.Img src={Life} alt="Conway's game of life" width="100%" height="100%" />
      <Card.Body>
        <Card.Title>Conway's Game of Life</Card.Title>
        <Card.Text>
          The idea of <em>The Game of Life</em> has fascinated me for many
          years. Now that I am able to write decent code, I thought I would try
          a build. Made with Pygame and Numpy. This zero player game is
          something I still come back to often, just to watch!
        </Card.Text>
      </Card.Body>
      <ProjectCardFooter btnName="life" links={projectLinks.life} />
    </Card>
  );
}

export function KivyApp() {
  return (
    <Card>
      <Card.Img src={Kivy} alt="Kivy messaging application" width="100%" height="100%"/>
      <Card.Body>
        <Card.Title>Kivy - Messaging App</Card.Title>
        <Card.Text>
          A messaging application for two or more users to send and receive
          messages through a "server" via python's socket. The GUI is built with
          Kivy for potential future integration with mobile clients.
          <br />
          <br />
        </Card.Text>
      </Card.Body>
      <ProjectCardFooter btnName="messenger" links={projectLinks.messenger} />
    </Card>
  );
}

export function CryptographyApp() {
  return (
    <Card>
      <Card.Img src={Encrypted} alt="cryptography" width="100%" height="100%"/>
      <Card.Body>
        <Card.Title>Fernet Cryptography</Card.Title>
        <Card.Text>
          A useful little program to encrypt/decrypt messages and generate keys.
          While exploring different possibilities of projects to work on, I
          became curious about encryption. This wrapper was a fun way to explore
          cryptography.
        </Card.Text>
      </Card.Body>
      <ProjectCardFooter
        btnName="cryptography"
        links={projectLinks.cryptography}
      />
    </Card>
  );
}

export function MedTrackApp() {
  return (
    <Card>
      <Card.Img src={MedTrack} alt="Medication tracking application" width="100%" height="100%"/>
      <Card.Body>
        <Card.Title>Med-Track</Card.Title>
        <Card.Text>
          An application to quickly and easily store and track their medication
          intake, and export the data for physician use. This was a solution
          from listening to a close friend explain how most other apps are way
          too bloated. This is my solution to what should be a simple app.
        </Card.Text>
      </Card.Body>

      <ProjectCardFooter btnName="Med-Track" links={projectLinks.MedTrack} />
    </Card>
  );
}

export function TodoApp() {
  return (
    <Card>
      <Card.Img src={Todo} alt="Django React Todo app" width="100%" height="100%"/>
      <Card.Body>
        <Card.Title>Todo</Card.Title>
        <Card.Text>
          My first attempt at a Django-React stack application. Similar to
          Keeper in functionality (ie: Creating and marking items as finished),
          but with a backend using a Postgres database and
          Django/Django-rest-framework API calls to interact with the React
          frontend.
        </Card.Text>
      </Card.Body>

      <ProjectCardFooter btnName="To-Do" links={projectLinks.ToDo} />
    </Card>
  );
}

export function KeeperApp() {
  return (
    <Card>
      <Card.Img src={Keeper} alt="Keeper screenshot" width="100%" height="100%"/>
      <Card.Body>
        <Card.Title>Keeper</Card.Title>
        <Card.Text>
          Keep is an application that allows you to creat and delete To Do notes
          in the browser. Built with React and using minimal styling while
          exploring material-ui libraries. This was used to learn more about
          React, as such, no backend implementation is set up at this time.
        </Card.Text>
      </Card.Body>

      <ProjectCardFooter btnName="Keeper" links={projectLinks.Keeper} />
    </Card>
  );
}

export function SimonApp() {
  return (
    <Card>
      <Card.Img src={simon} alt="Javascript Simon (game)" width="100%" height="100%"/>
      <Card.Body>
        <Card.Title>Simon</Card.Title>
        <Card.Text>
          The pattern recognition game from everyone's childhood. As a part of a
          learning course, I have re-created the game to be playable in the
          browser with simple JavaScript and DOM manipulation.
        </Card.Text>
      </Card.Body>

      <ProjectCardFooter btnName="Simon" links={projectLinks.Simon} />
    </Card>
  );
}

export function TinDogApp() {
  return (
    <Card>
      <Card.Img src={tinDog} alt="Tin-dog landing page." width="100%" height="100%"/>
      <Card.Body>
        <Card.Title>Tindog</Card.Title>
        <Card.Text>
          One of the first "<em>challenges</em>" I accomplished after completing
          basic HTML and CSS coursework. The page attempts to imitate Tinder,
          the popular dating app. However, this version is for your pooch!
        </Card.Text>
      </Card.Body>

      <ProjectCardFooter btnName="TinDog" links={projectLinks.TinDog} />
    </Card>
  );
}

export function DiceApp() {
  return (
    <Card>
      <Card.Img src={diceGame} alt="Dice rolling game" width="100%" height="100%"/>
      <Card.Body>
        <Card.Title>Dice.random</Card.Title>
        <Card.Text>
          A single page application, proven to solve who picks lunch today. Made
          with pure JavaScript and styled with CSS. This is an important project
          for me, because, while making it, MANY basic concepts "clicked".
        </Card.Text>
      </Card.Body>

      <ProjectCardFooter btnName="Dice" links={projectLinks.Dice} />
    </Card>
  );
}
