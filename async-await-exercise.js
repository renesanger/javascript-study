/* Rewrite this piece of code using Async/Wait */

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404


async function loadJson(url) {
  try {
    let response =  await fetch(url);
    if(response.status == 200){
      return response.json();
    }
    else {
      throw new Error(response.status);
    }
  }
  catch (err) {
    alert(err);
  }
}

loadJson('https://javascript.info/no-such-user.json');

async function loadJson(url) {
  let response = await fetch(url);
  if(response.status == 200) {
    return response.json();
  }
  else {
    throw new Error(response.status);
  }
}

loadJson('https://javascript.info/no-such-user.json').catch(alert);





