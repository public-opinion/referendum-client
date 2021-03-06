
import type {
  CSSProperties,
} from "react";
import { useEffect } from "react";

export const style = (cssString: string): CSSProperties => {
  let out: any = {};
  // I know it would break on ::after - content: ";:"
  cssString.split(";"
  ).map(s => s.split(":")
  ).forEach(([key, value]) => {
    if(!value) return;
    
    let camelKey = key.replace(
      /-[a-z]/g, g => g[1].toUpperCase()
    ).trim();
    out[camelKey] = value.trim();
  })
  // Object.fromEntries() // 91.97% on caniuse

  return out;
};


export function useAsyncEffect<A,B,C,D,E,F,G>(
  effect: (isMounted: () => boolean) => any,
  deps?: Partial<[A, B, C, D, E, F, G]> | [],
){
  useEffect(() => {
    let mounted = true;
    let isMounted = () => mounted;

    effect(isMounted);

    return () => { mounted = false; }
  }, deps && [ ...deps, effect ])
}

export function capitalize(word: string){
  return word[0].toUpperCase() + word.slice(1);
}