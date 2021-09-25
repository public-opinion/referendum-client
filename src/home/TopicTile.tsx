

import type React from 'react';
import "../tile.scss";
import {
  Link
} from "react-router-dom";
// import "../button.scss";

export declare interface TileProps {
  id: number | string
  title?: string
  description?: string
}

export default function Tile({
  id, title, description
}: TileProps){
  return (
    <div className="situation">
      <Link to={`/topic?id=${id}`}>
        <h3 className="title">
          { title }
        </h3>
      </Link>
      <span className="right">
        10,200 people has voted important
      </span>
      <span style={{ flexBasis: "100%", height: "0"}}></span>
      <span className="description"><small>
        {description || <i>(no description)</i>}
      </small></span>
      <button className="button right">Vote Importance</button>
    </div>
  );
}