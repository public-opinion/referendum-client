

import type { Dispatch, SetStateAction } from "react"
import {
  useState,
  useEffect,
  useMemo
} from "react";
import ReactDOM from "react-dom";


import "./style.scss";

function useFixAndDisableInputFocus(
    fullPageDiv: HTMLDivElement,
    loading: boolean
){
  useEffect(() => {
    /*
    ISSUE #ABCD:
    loading re-enable originally intentionally disabled elements 
    */
    let inputElements = document.querySelectorAll("input");
    if(loading){
      for(let elem of inputElements){
        elem.disabled = true;
      }
      fullPageDiv.focus();
    } else{
      for(let elem of inputElements){
        elem.disabled = false;
      }
    }
  }, [ fullPageDiv, loading ])
}

export default function useFullPageLoading(
  messageElement: JSX.Element = <div>loading</div>
): [
  Dispatch<SetStateAction<boolean>>,
  Function,
  Function,
  Dispatch<SetStateAction<JSX.Element | null>>
] {
  const [ loading, setLoading ] = useState(false);
  const [
    overrideMessageElement, setOverrideMessageElement
  ] = useState<JSX.Element | null>(null);
  const fullPageDiv = useMemo(() => {
    const fullPageDiv = document.createElement("div");
    document.body.appendChild(fullPageDiv);
    return fullPageDiv;
  }, [])

  useFixAndDisableInputFocus(fullPageDiv, loading);
  
  const fullPageElement = overrideMessageElement ?
    overrideMessageElement :
  loading ? (
    <div className="full-page">
      { messageElement }
    </div> 
  ) : <div></div>;

  // render
  useEffect(() => {
    ReactDOM.render(fullPageElement, fullPageDiv);
  }, [ loading, fullPageElement ]);


  // helper functions
  const startLoading = () => setLoading(true);
  const endLoading = () => setLoading(false);
  return [
    setLoading,
    startLoading,
    endLoading,
    setOverrideMessageElement
  ];
}