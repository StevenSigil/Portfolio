import React from "react";

import { ReactComponent as LoadingSpinner } from "../public/static/media/logos-icons/loadingSpinner.svg";

export default function Spinner() {
  return (
    <div className="loadingSpinner">
      <LoadingSpinner />
      <h2>Loading</h2>
    </div>
  );
}
