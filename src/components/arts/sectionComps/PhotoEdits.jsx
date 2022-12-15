import { Container } from "react-bootstrap";

import ph2e from "../../../public/static/media/arts/facing_imgs/p2/2e.png";
import ph2o from "../../../public/static/media/arts/facing_imgs/p2/2o.png";
import ph3e from "../../../public/static/media/arts/facing_imgs/p3/3e.png";
import ph3o from "../../../public/static/media/arts/facing_imgs/p3/3o.png";
import ph4e from "../../../public/static/media/arts/facing_imgs/p4/4e.png";
import ph4o from "../../../public/static/media/arts/facing_imgs/p4/4o.png";
import ph5e from "../../../public/static/media/arts/facing_imgs/p5/Restore-1e.png";
import ph5o from "../../../public/static/media/arts/facing_imgs/p5/Restore-1o.png";

export default function PhotoEdits() {
  return (
    <Container className="secContainer" id="photos">
      <h2>Photo Edits</h2>

      <div className="doubleWide">
        <img src={ph5o} alt="Edit 5 - Original" />
        <img src={ph5e} alt="Edit 5 - Edited" />
      </div>

      <div className="doubleWide">
        <img src={ph2o} alt="Info Graphic 2" />
        <img src={ph2e} alt="Info Graphic 1" />
      </div>

      <div className="oneByTwoWide">
        <div
          className="leftSingleContainer"
          style={{ maxWidth: "calc(30% - 10px)" }}>
          <img src={ph3o} alt="Info Graphic 2" />
        </div>

        <div
          className="rightTwoContainer"
          style={{ maxWidth: "calc(80% - 10px)" }}>
          <img src={ph3e} alt="Info Graphic 1" />
        </div>
      </div>

      <div className="oneByTwoWide">
        <div
          className="leftSingleContainer"
          style={{ maxWidth: "calc(30% - 10px)" }}>
          <img src={ph4o} alt="Info Graphic 2" />
        </div>

        <div
          className="rightTwoContainer"
          style={{ maxWidth: "calc(80% - 10px)" }}>
          <img src={ph4e} alt="Info Graphic 1" />
        </div>
      </div>
    </Container>
  );
}
