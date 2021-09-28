
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';
import "../tile.scss";
import "../css/global.scss";


import Header from "../common/Header";
import TopicTile from './TopicTile';
import DomainTile from './DomainTile';
import { useState } from 'react';
import { getTopics } from '../logics/Topic';
import type { Topic } from "../logics/Topic";
import SortButton from '../common/SortButton';
import { style } from '../common/util';
import Button from '../common/Button';
import { useWindowAtBottom } from '../ui/Scrolling';
function Home() {
  const [ topics, setTopics ] = useState<Topic[]>([])
  const [ loading, setLoading ] = useState(false);

  const [
    infiniteScrollingEnabled,
    setInfiniteScrollingEnabled
  ] = useState(false);

  const UI_loadMoreTopics = () => {
    if(!loading){
      setLoading(true);
      getTopics(
        "id, title, SUBSTRING(content, 1, 50)", {
          topics
        }
      ).then(res => {
        
        for(let row of res){
          let strippedContent = row["SUBSTRING(content, 1, 50)"];
          if(strippedContent?.length == 50){
            strippedContent += " ...";
          }
          row["content"] = strippedContent;
        }
        
        setTopics(res);
        setLoading(false);
      });
    }
  }

  // load initial topics
  useEffect(() => {
    let disposed = false;
    UI_loadMoreTopics();
    return () => { disposed = true; }
  }, []);

  // load additional topics
  const [ atBottom, setAtBottom ] = useState(false);


  useWindowAtBottom(async () => {
    setAtBottom(true);
    if(infiniteScrollingEnabled && !loading){
      UI_loadMoreTopics()
    }
  });
  useEffect(() => {
    if(infiniteScrollingEnabled && 
        atBottom && !loading){
      UI_loadMoreTopics()
    }
  }, [ atBottom, infiniteScrollingEnabled])

  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <div className="domain-panel">
          <hgroup className="center-flex">
            <h1 style={{ display: "inline-block" }}>Domains</h1>
            <SortButton style={style("margin-left: auto")} />
          </hgroup>
          <div className="domain-tile-container">
            <DomainTile name="referendum" />
            <DomainTile name="general" />
            <DomainTile name="casual" />
            <DomainTile name="food" />

          </div>
        </div>
        <hgroup className="center-flex">
          <h1 className="topic-title">Topics</h1>
          <Link to="/topic/create"
              className="create-topic-button">
            Create New Topic
          </Link>
          <SortButton />
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
        {
          !infiniteScrollingEnabled ? (
            <div className="flex-center" style={style(`
                width: 100%;
                justify-content: center;
              `)}>
              <Button onClick={() => {
                    setInfiniteScrollingEnabled(true);
                  }}>
                Enable infinite scrolling
              </Button>
            </div>
          ) : (undefined)
        }
      </div>
      <div className="App-footer">

      </div>
    </div>
  );
}

export default Home;
