
import {
  useState,
  useRef,
  useEffect,
  useMemo
} from "react";

import { register, checkUsername, checkUsernameReturnType } from "../../logics/Users";
import Button from "../../common/Button";

import PageTemplate from "../../common/PageTemplate";
import { style } from "../../common/util";
import useFullPageLoading from "../../common/useFullPageLoading";
import { useHistory } from "react-router";



function RegisterPage() {
  const [ name, setName ] = useState("");
  const [ usernameStatus, setUsernameStatus ] = useState<
    null | "loading" | checkUsernameReturnType>( null );
  const passwordRef = useRef<HTMLInputElement>(null);

  const validateUsername = async () => {
    if(usernameStatus !== "loading"){
      setUsernameStatus("loading");
      checkUsername(
        name
      ).then(res => {
        setUsernameStatus(res);
      });
    }
  };


  const loadingMessageElement = useMemo(() => {
    return <div>
      NOT LOADING
    </div>
  }, []);

  const [
    setLoading,
    startLoading,
    endLoading,
    setOverrideMessageElement,
  ] = useFullPageLoading(loadingMessageElement);

  const history = useHistory();

  const onSubmit = async () => {
    let pswd = passwordRef?.current?.value;
    if(pswd){
      startLoading();
      await register(
        name, pswd
      ).then(res => {
        console.log(res);
      }).catch(e => {
        console.error(e);
      });
      setOverrideMessageElement(<div>
        User Register successful
      </div>)
      await new Promise(res => setTimeout(res, 2000));
      endLoading();
      history.push("/");
    }
  }
  return (
    <PageTemplate>
      <div>
        <form>
          <h2>register</h2>
          name: <input type="text" onChange={(e) => {
            setName(e.target.value)
          }} />
          <Button disabled={ usernameStatus === "loading" }
              onClick={validateUsername}>
            { usernameStatus === "loading" ? "loading" : "check user name" }
          </Button><br />
          {
            usernameStatus && typeof usernameStatus === "object" ? (
              usernameStatus.valid ? (
                <div style={style(`color: green`)}>
                  username { usernameStatus.name } is valid
                </div>
              ) : (
                <div style={style(`color: red`)}>
                  username { usernameStatus.name } is invalid
                </div>
              )
            ) : <br />
          }
          password: <input
              type="password"
              ref={passwordRef}
              onFocus={validateUsername}/>
          <Button onClick={onSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </PageTemplate>
  );
}

export default RegisterPage;
