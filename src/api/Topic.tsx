

export type Topic = {
  id: number
  title: string
  content: string
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
  q: string = "id, title"
){
  return fetch(`/api/v1/topics`, {
    method: "GET",
  }).then(res => res.json()
  )
}