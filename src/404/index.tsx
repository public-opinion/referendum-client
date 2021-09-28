
import React from "react";
import {
  Link
} from "react-router-dom";

import Button from "../common/Button";
import Header from "../common/Header";

export type NotFoundProps = {
  msg?: string
}

export default function NotFound({
  msg
}: NotFoundProps) {
  return (
    <div>
      <Header />
      <div>
        { msg || "Page not found" }
      </div><br />
      <Button href="/">
        Go back to home page
      </Button>
    </div>
  );
}
