

import type React from 'react';
import "../tile.scss";
import {
  Link
} from "react-router-dom";
// import "../button.scss";

export declare interface TileProps {
    id: number | string
    title?: string
}

export default function Tile({
  id, title
}: TileProps){
  return (
    <div className="situation">
      <Link to={`/topic?t=${id}`}>
        <h3 className="title">
          { title }
        </h3>
      </Link>
      <span className="right">
        10,200 people has voted important
      </span>
      <span style={{ flexBasis: "100%", height: "0"}}></span>
      <span className="description"><small>

        blah blah blah blah
      </small></span>
      <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent" />
      </svg>
      <button className="button right">Vote Importance</button>
    </div>
  );
}