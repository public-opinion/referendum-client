
import './Home.css';
import "../tile.scss";
import "../button.scss";

import { style } from "../util";
import Tile from './Tile';

import Header from "../common/Header";
import TopicTile from './TopicTile';

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <hgroup style={style(
          "display: flex; place-items: center flex-start;"
        )}>
          <h1 style={{ display: "inline-block" }}>Topics</h1>
          <svg
          style={Object.assign({
            border: "1px solid rgba(0, 0, 0, 0.2)",
            marginLeft: "auto"
          }, style("cursor: pointer"))}
          width="35" height="35" viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
            <path d="
              M 10 12.5 h 80 v 15 h -80 Z
              M 10 42.5 h 55 v 15 h -55 Z
              M 10 72.5 h 30 v 15 h -30 Z"
            stroke="black" fill="black" />
          </svg>
        </hgroup>
        <TopicTile
            id="50505"
            title="Unaffordable housing for general public"
        />
        <TopicTile
            id="12492"
            title="Write a book together yays"
        />
        <TopicTile
            id="41242"
            title="SFF PC Case Tier list *** weighted aspects"
        />
        <TopicTile
            id="35353"
            title="Improve this site"
        />
      </div>
      <div className="App-footer">

      </div>
    </div>
  );
}

export default Home;
