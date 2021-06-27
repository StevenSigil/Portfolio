import React from "react";
import { HashLink } from "react-router-hash-link";

import { ReactComponent as DownFillIcon } from "../../public/static/media/logos-icons/down-fill.svg";
import { ReactComponent as UpFillIcon } from "../../public/static/media/logos-icons/up-fill.svg";

export default function NavBtns({ handleNextScrollPosition }) {
  return (
    <div className="navBtns">
      <HashLink smooth to="#top">
        <div>
          <UpFillIcon />
          <p>Top</p>
        </div>
      </HashLink>

      <div id="nextBtn" onClick={handleNextScrollPosition}>
        <p>Next</p>
        <DownFillIcon />
      </div>
    </div>
  );
}
