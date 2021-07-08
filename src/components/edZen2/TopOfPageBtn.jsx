import React from "react";
import { HashLink } from "react-router-hash-link";

import { ReactComponent as UpLink } from "../../public/static/media/logos-icons/up-fill.svg";

export default function TopOfPageBtn() {
  return (
    <HashLink to="#top" className="fixedTopBtn" smooth>
      <div>
        <UpLink />
        <p>top</p>
      </div>
    </HashLink>
  );
}
