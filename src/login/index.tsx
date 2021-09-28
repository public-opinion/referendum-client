
import "../tile.scss";

import { style } from "../common/util";

import Header from "../common/Header";
import React from "react";


function Login() {
  return (
    <React.Fragment>
      <Header />
      <div>
        <form>
          register<br />
          email: <input type="email" /><br />
          password: <input type="password" />
          <input type="submit" />
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
