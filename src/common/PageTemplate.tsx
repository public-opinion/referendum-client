
import React from 'react';

import Header from "../common/Header";

export declare interface Props {
  children?: React.ReactChild[]
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
