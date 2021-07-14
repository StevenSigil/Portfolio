import React from "react";
import { HashLink } from "react-router-hash-link";

import { ReactComponent as UpLink } from "../public/static/media/logos-icons/up-fill.svg";

export default function TopOfPageBtn({ destination }) {
  if (!destination) {
    destination = "#top";
  }

  return (
    <HashLink to={destination} className="fixedTopBtn" smooth>
      <div>
        <UpLink />
        <p>top</p>
      </div>
    </HashLink>
  );
}
