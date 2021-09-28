

import type React from 'react';
import "../css/global.scss"
import "./Home.scss";
import {
  Link
} from "react-router-dom";
// import "../button.scss";

export declare interface TileProps {
  name: string
  description?: string
}

export default function DomainTile({
  name, description
}: TileProps){
  return (
    <Link to={`/domain/${name}`}>
      <div className="inline-flex-center domain-tile-base-square">
        <div className="inline-flex-center max square-content">
          <div>
            <h2 className="title">
              { name[0].toUpperCase() + name.slice(1) }
            </h2>
            <span className="right">
              10,200 people active
            </span><br />
            <span className="description"><small>
              {description || <i>(no description)</i>}
            </small></span>
          </div>
        </div>
      </div>
    </Link>
  );
}