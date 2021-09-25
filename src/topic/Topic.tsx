
import React, { useState } from 'react';
import "../button.scss";

// import { style } from "../util";

import Header from "../common/Header";

import { getTopicInfo } from '../api/Topic';
import { useAsyncEffect } from '../common/util';

export declare interface TopicProps {
  title?: string
  content?: string
}

function Topic({
  title,
  content
}: TopicProps){
  const [ _title, setTitle ] = useState(title || "Loading...");
  const [ _content, setContent ] = useState(content || "Loading...");


  useAsyncEffect(async (isMounted) => {
    let url = new URL(window.location.href);
    let topic_id = url.searchParams.get('id') || "";
    console.log("retrieving topic info from server api");
    getTopicInfo(
      topic_id
    ).then(({
      title,
      content
    }) => {
      if(!isMounted()) return;
      if(title) setTitle(title);
      if(content){
        setContent(content);
      } else{
        setContent("(no content)");
      }
    })

  }, [])

  return (
    <React.Fragment>
      <Header />
      <h2 className="title">{_title}</h2>
      <div className="content">{_content}</div>
    </React.Fragment>
  );
}

export default Topic;
