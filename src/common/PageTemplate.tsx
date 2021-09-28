

import type { ReactNode } from "react";
import React from 'react';

import Header from "../common/Header";

export declare interface Props {
  children?: ReactNode
}

function PageTemplate({
  children
}: Props){
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}

export default PageTemplate;
