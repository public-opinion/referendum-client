
import "../tile.scss";

import { style } from "../common/util";

import Header from "../common/Header";
import React, {
  useCallback,
  useState,
  useRef,
} from "react";

import { login } from "../logics/Users";
import Button from "../common/Button";

function Login() {
  const [ name, setName ] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback(() => {
    login(name, passwordRef?.current?.value || "");
  }, [
    name, passwordRef
  ])
  return (
    <React.Fragment>
      <Header />
      <div>
        <form>
          <h2>Login</h2>
          name: <input type="text" /><br />
          password: <input type="password" ref={passwordRef}/>
          <Button onClick={onSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
