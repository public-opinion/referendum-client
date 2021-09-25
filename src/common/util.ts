
import type {
  CSSProperties,
  DependencyList,
  EffectCallback,
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


export function useAsyncEffect(
  effect: (isMounted: () => boolean) => any,
  deps?: DependencyList,
){
  useEffect(() => {
    let mounted = true;
    let isMounted = () => mounted;

    effect(isMounted);

    return () => { mounted = false; }
  }, deps)
}