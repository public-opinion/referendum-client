

export function login(
  name: string,
  password: string
){
  fetch("/oauth/validate", {
    method: "POST",
    mode: "cors",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: "123",
      password: "asdf",
    })
  }).then(res => res.text()
  ).then(console.log
  ).catch(console.error);
}

export async function register(
  name: string,
  password: string
){
  return fetch("/api/v1/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      password,
    })
  }).then(res => res.text()).then(t => console.log(t))
}

export type checkUsernameReturnType = {
  valid: boolean, name: string
}
export async function checkUsername(
  name: string
): Promise<checkUsernameReturnType> {
  try{
    let res = await fetch("/api/v1/user/checkUsername", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
      })
    }).then(res => res.json());
  
    if(res?.valid){
      return {
        valid: true,
        name
      };
    }

  } catch(e){
    console.error(e);
  }

  return {
    valid: false,
    name
  };
}