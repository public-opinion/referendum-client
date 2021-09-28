
// import type { MutableRefObject } from "react";
import { useEffect, useRef } from "react"


  /*
https://caniuse.com/?search=intersectionobserver
  */
export function useWindowAtBottom(
    callback: Function,
    {
      buffer = 50
    }: {
      buffer?: number
    } = {}
){
  let callbackContainer = useRef(callback);
  callbackContainer.current = callback;
  useEffect(() => {
    let onScroll = () => {
      let d = document.documentElement;
      let _atBottom = d.scrollTop > (
          d.scrollHeight - d.clientHeight - buffer
      );
      if(_atBottom){
        callbackContainer.current?.();
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);
  return callbackContainer;
}