
import React, { useEffect, useState } from 'react';
import "../button.scss";

// import { style } from "../util";

import Header from "../common/Header";

import { getTopicTitle } from '../api/Topic';

export declare interface TopicProps {
  title?: string
}

function Topic({
  title
}: TopicProps){
  const [ _title, setTitle ] = useState("");
  useEffect(() => {
    
    let url = new URL(window.location.href);
    setTitle(url.searchParams.get('t') as string);
    let topic_id = url.searchParams.get('t') || ""
    console.log("retrieving title from server api");
    getTopicTitle(topic_id
    ).then(title => {
      if(title) setTitle(title);
    })


  }, [])

  return (
    <React.Fragment>
      <Header />
      <h2 className="title">{_title}</h2>
    </React.Fragment>
  );
}

export default Topic;
