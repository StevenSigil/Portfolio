import React from "react";
import PDF from "../public/static/media/stevenE_publicResume.pdf";

export default function Resume() {
  return (
    <div style={{ height: "100vh" }}>
      <object data={PDF} type="application/pdf" width="100%" height="100%">
        <p>
          Cannot display... Please click{" "}
          <a href={PDF} download>
            here
          </a>{" "}
          to download a copy.
        </p>
      </object>
    </div>
  );
}
