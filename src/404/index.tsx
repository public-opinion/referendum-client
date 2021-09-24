
import React from "react";
import {
  Link
} from "react-router-dom";

import Header from "../common/Header";

import "../button.scss";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div>
        Page not found
      </div>
      <div className="button">
        <Link to="/">Go back to home page</Link>
      </div>
    </div>
  );
}
