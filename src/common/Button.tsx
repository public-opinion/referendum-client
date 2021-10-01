
import type {
  MouseEventHandler,
  ReactNode
} from "react";
import React from "react";

import "./Button.scss";

export type ButtonProps = {
  children?: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>
  className?: string
}


export default function Button({
  children,
  href,
  onClick,
  className
}: ButtonProps){
  if(href){

    return (
      <a className={"button " + className}
          href={href}
          onClick={onClick}>
        { children }
      </a>
    );
  }

  return (
    <div className={"button " + className}
        onClick={onClick}>
      { children }
    </div>
  )
}