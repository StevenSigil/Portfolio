import { Container } from "react-bootstrap";

import Cal1 from "../../../public/static/media/arts/facing_imgs/Caligraphy/1.png";
import Cal2 from "../../../public/static/media/arts/facing_imgs/Caligraphy/2.png";
import { ReactComponent as Cal3 } from "../../../public/static/media/arts/facing_imgs/Caligraphy/3.svg";

export default function Caligraphy() {
  return (
    <Container className="secContainer">
      <h2>Digital Calligraphy</h2>

      <div className="oneByTwoWide">
        <div className="leftSingleContainer">
          <img src={Cal1} alt="Caligraphy 1" className="higherImg" />
        </div>

        <div className="rightTwoContainer">
          <img src={Cal2} alt="Caligraphy 2" />
          <Cal3 style={{ backgroundColor: "white" }} />
        </div>
      </div>
    </Container>
  );
}
