

export type Topic = {
  id: number
  title: string
  content: string
  [key: string]: any
}

export async function getTopicTitle(id: number | string){
  return fetch(`/api/v1/topic?id=${id}&q=title`, {
    method: "GET",
    
  }).then(res => res.json()
  ).then(obj => obj?.title)
}

export async function getTopicInfo(id: number | string){
  return fetch(`/api/v1/topic?id=${id}&q=title,content`, {
    method: "GET",
  }).then(res => res.json()
  ).catch(e => {
    console.error(e);
  })
}

export async function getTopics(
  q: string = "id, title", {
    topics = []
  }: {
    topics?: Topic[]
  } = {}
): Promise<Topic[]> {
  let query = "";
  if(topics.length){
    query += `start=${topics.length}`
  }

  let url = `/api/v1/topics`;
  if(query){
    url += "?" + query;
  }

  return fetch(url, {
    method: "GET",
  }).then(res => res.json()
  ).then(arr => {
    if(Array.isArray(arr)){
      // may need to be aware of outdated array references
      return [ ...topics, ...arr ] as (Topic[]);
    }

    throw new Error(
      "getTopics: server response is not an array " + arr
    );

  }).catch(e => {
    console.error(e);
    return []
  })
}