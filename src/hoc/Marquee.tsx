
import type { ReactNode } from "react";
import React from "react";

import "./Marquee.scss";

export default function Marquee({
  children,
  className,
  ...props
}: {
  className?: string
  children: ReactNode
}){
  return <div className={"marquee-base " +  className} {...props}>
    { children }
  </div>
}