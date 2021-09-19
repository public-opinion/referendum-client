

export async function getTopicTitle(id: number | string){
  return fetch(`/api/v1/topic?id=${id}&q=title`, {
    method: "GET"
  }).then(res => res.json()
  ).then(obj => obj?.title)
}