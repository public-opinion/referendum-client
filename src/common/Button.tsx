
import type {
  MouseEventHandler,
  ReactNode
} from "react";
import React from "react";

import "./Button.scss";

export type ButtonProps = {
  children?: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  className?: string
}


export default function Button({
  children,
  href,
  onClick,
  className
}: ButtonProps){
  return (
    <a className={"button " + className}
        href={href}
        onClick={onClick}>
      { children }
    </a>
  );
}