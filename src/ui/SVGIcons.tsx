

import type { CSSProperties } from "react";
import React from "react";

import "./SVGIcons.scss";

export type IconProps = {
  className?: string
  [key: string]: any
}

export type PathProps = {
  stroke?: string
  fill?: string
}

function SvgBase(props: IconProps){
  return (
    <svg
        className={"sort-button " + props.className}
        width="35" height="35" viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        {...props}></svg>
  );
}


function SinglePathIcon(path: string, {
    className = "",
    ...props
}: IconProps = {}){
  return (
    <svg
        className={"sort-button " + className}
        width="35" height="35" viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
      <path d={path} stroke="black" fill="black" />
    </svg>
  );
}

export function Hamburger(props: IconProps){
  return SinglePathIcon(`
    M 10 12.5 h 80 v 15 h -80 Z
    M 10 42.5 h 55 v 15 h -55 Z
    M 10 72.5 h 30 v 15 h -30 Z
  `, props);
}
/*
((r) => `
  M 50 17.5
  m -${r}, 0
  a ${r}, ${r} 0 1,0 ${r*2},0
  a ${r}, ${r} 0 1,0 -${r*2},0 Z
  M 10 42.5 h 55 v 15 h -55 Z
`)(20)
*/
export function User({
  stroke, fill = "black", ...props
}: IconProps & PathProps){
  return (
    <SvgBase {...props} stroke={stroke} fill={fill} >
      <circle cx="50" cy="25" r="18" />

      <path d={
        /***** /// <= add/remove space before '///' to toggle
        "M 10 90 h 80 Q 50 10, 10 90 Z"
        /*/
        `
        M 15 90 C 10 32, 90 32, 85 90 Z
        `
        /*****/
      } />
    </SvgBase>
  );
}