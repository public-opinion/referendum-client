

import type React from 'react';
import "../tile.scss";

import PageTemplate from '../common/PageTemplate';
// import "../button.scss";

export declare interface PlaygroundProps {

}

export default function Playground({

}: PlaygroundProps){
  return (
    <PageTemplate>
      <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent" />
      </svg>
      <button className="button right">Vote Importance</button>

    </PageTemplate>
  );
}