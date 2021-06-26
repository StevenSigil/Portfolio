import React from "react";
import { Row } from "react-bootstrap";

import xDavidson_1x from "../../public/static/media/edZen_imgs/userPersonas/X. Davidson 2.png";
import sRichmond_1x from "../../public/static/media/edZen_imgs/userPersonas/S. Richmond 2.png";
import aAndrews_1x from "../../public/static/media/edZen_imgs/userPersonas/A. Andrews 2.png";

export default function UserPersonaScrollGroup() {
  return (
    <Row noGutters className="imgContainer">
      <div className="scroll-x">
        <div className="scrollItem">
          <img src={xDavidson_1x} alt="img" />
        </div>
        <div className="scrollItem">
          <img src={sRichmond_1x} alt="img" />
        </div>
        <div className="scrollItem">
          <img src={aAndrews_1x} alt="img" />
        </div>
      </div>
    </Row>
  );
}
