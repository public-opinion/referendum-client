

import React, {
  useState
} from "react";
import Button from "../../common/Button";
import PageTemplate from "../../common/PageTemplate";
import { style } from "../../common/util";

/*
fetch("/v1/topic/create", {
  method: "POST",
}).then(res => res.text()
).then(console.log);
*/

export default function CreateTopic(){
  let [ title, setTitle ] = useState("");
  let [ content, setContent ] = useState("");

  let onSubmit = async () => {
    try{
      if(!title){
        console.error("empty title");
        return;
      }
      if(!content){
        console.error("empty content");
        return;
      }

      let res = await fetch("/api/v1/topic/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content
        })
      });
      let obj = await res.json();
      console.log(obj)
    } catch(e){
      console.error(e);
    }
  }

  return (
    <PageTemplate>
      <div style={style("padding: 15px;")}>
        <h2>Create Topic</h2>
        <div>
          <h3>Topic Title</h3>
          <input type="text" style={style(`
              font-size: 24px;
              height: 2em;
              width: 100%;
            `)} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div>
          <h3>Topic Content</h3>
          <textarea style={style(`
              width: 100%;
              min-height: 500px;
              resize: vertical;
            `)}
            onChange={e => setContent(e.target.value)}/>
        </div>
        <Button onClick={onSubmit}>
          Submit
        </Button>

      </div>
    </PageTemplate>
  );
}