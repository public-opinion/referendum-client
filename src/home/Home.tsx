
import { useEffect } from 'react';

import './Home.css';
import "../tile.scss";
import "../button.scss";
import "../css/global.scss";


import Header from "../common/Header";
import TopicTile from './TopicTile';
import { useState } from 'react';
import { getTopics } from '../api/Topic';
import type { Topic } from "../api/Topic";

function Home() {
  const [ topics, setTopics ] = useState<Topic[]>([])

  useEffect(() => {
    let disposed = false;
    (async () => {
      let res = await getTopics("id, title, SUBSTRING(content, 1, 50)");
      if(disposed) return;
      try{
        for(let row of res){
          let strippedContent = row["SUBSTRING(content, 1, 50)"];
          if(strippedContent?.length == 50){
            strippedContent += " ...";
          }
          row["content"] = strippedContent;
        }
        setTopics(res);
      } catch(e){
        console.error(e);
      }
    })();
    return () => { disposed = true; }
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <hgroup className="center-flex">
          <h1 style={{ display: "inline-block" }}>Topics</h1>
          <svg className="sort-button"
          width="35" height="35" viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
            <path d="
              M 10 12.5 h 80 v 15 h -80 Z
              M 10 42.5 h 55 v 15 h -55 Z
              M 10 72.5 h 30 v 15 h -30 Z"
            stroke="black" fill="black" />
          </svg>
        </hgroup>
        {
          topics.length === 0 ? (
            <div>
              Loading...
            </div>
          ) : (
            topics.map(({
              id, title, content
            }) => {
              return <TopicTile
                key={id}
                id={id}
                title={title}
                description={content}
              />
            })
          )
        }
      </div>
      <div className="App-footer">

      </div>
    </div>
  );
}

export default Home;
