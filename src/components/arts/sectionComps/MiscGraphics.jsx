import { Container } from "react-bootstrap";

import msc1 from "../../../public/static/media/arts/facing_imgs/MiscGraphics/1.png";
import msc2 from "../../../public/static/media/arts/facing_imgs/MiscGraphics/2.png";

export default function MiscGraphics() {
  return (
    <Container className="secContainer">
      <h2>Miscellaneous Graphics</h2>

      <div className="oneByTwoWide">
        <div className="leftSingleContainer">
          <img src={msc1} alt="Misc. 1" />
        </div>
        <div className="rightTwoContainer">
          <img src={msc2} alt="Misc. 2" />
        </div>
      </div>
    </Container>
  );
}
