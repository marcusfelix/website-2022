import type { APIRoute } from "astro";

const client_id = import.meta.env.OAUTH2_CLIENT_ID;
const client_secret = import.meta.env.OAUTH2_CLIENT_SECRET;

export const get: APIRoute = async ({ params, request, redirect }) => {
  const template = new URL(request.url).searchParams.get("template") ?? "blank"
  const redirect_uri = `${request.url}?template=${params.template}`;
  const code = new URL(request.url).searchParams.get("code");
  const developer = "marcusfelix";

  if(code){
    try {
      
      const response = await fetch(
        "https://github.com/login/oauth/access_token",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
            "accept": "application/json",
          },
          body: JSON.stringify({ 
            client_id, 
            client_secret, 
            code
          }),
        }
      );
  
      const token = await response.json();
  
      if(token.error) {
        throw Error(token.error)
      }

      // Get profile
      const user = await fetch(`https://api.github.com/user`, {
        method: "get",
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${token.access_token}`
        }
      }).then(async (data) => data.ok ? data.json() : Promise.reject(await data.json()))

      // Create github project
      const repo = await fetch(`https://api.github.com/repos/marcusfelix/${template}/generate`, {
        method: "post",
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${token.access_token}`
        },
        body: JSON.stringify({
          private: true,
          owner: user.login,
          name: `${template}-${makeid(8)}`,
        })
      }).then(async (data) => data.ok ? data.json() : Promise.reject(await data.json()))

      // Add developer to repo
      const admin = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/collaborators/${developer}`, {
        method: "put",
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${token.access_token}`
        },
        body: JSON.stringify({
          permission: 'admin'
        })
      }).then(async (data) => data.ok ? data.json() : Promise.reject(await data.json()))
      
      // Redirect to repo
      return redirect(`https://github.com/${repo.owner.login}/${repo.name}`, 307);
    } catch (error: any) {
      console.error(error)
      return new Response(error.message, {
        status: 500,
      });
    }
  } else {
    return redirect(`https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo&redirect_uri=${redirect_uri}`, 307);
  }
};

function makeid(length: number) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}