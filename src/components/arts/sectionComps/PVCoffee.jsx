import { Container } from "react-bootstrap";

import pv1 from "../../../public/static/media/arts/facing_imgs/PVCoffee/1.png";
import pv3 from "../../../public/static/media/arts/facing_imgs/PVCoffee/3.png";
import pv6 from "../../../public/static/media/arts/facing_imgs/PVCoffee/6.png";
import pv7 from "../../../public/static/media/arts/facing_imgs/PVCoffee/7.png";
import pv9 from "../../../public/static/media/arts/facing_imgs/PVCoffee/9.png";
import pv10 from "../../../public/static/media/arts/facing_imgs/PVCoffee/10.png";
import pv11 from "../../../public/static/media/arts/facing_imgs/PVCoffee/11.png";
import pv13 from "../../../public/static/media/arts/facing_imgs/PVCoffee/13.png";

export default function PVCoffee() {
  return (
    <>
      <Container className="secContainer" id="graphics">
        <h2>Positive Vibe Coffee Co. Logo Design</h2>

        <div className="fourWide darkBG">
          <img src={pv1} alt="Positive Vibe Coffee 1" />
          <img src={pv3} alt="Positive Vibe Coffee 3" />
          <img src={pv6} alt="Positive Vibe Coffee 6" />
          <img src={pv7} alt="Positive Vibe Coffee 7" />
          <img src={pv9} alt="Positive Vibe Coffee 9" />
          <img src={pv10} alt="Positive Vibe Coffee 10" />
          <img src={pv11} alt="Positive Vibe Coffee 11" />
          <img src={pv13} alt="Positive Vibe Coffee 13" />
        </div>
      </Container>
    </>
  );
}
