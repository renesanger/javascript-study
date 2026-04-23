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

/*
  The best way to format the async function is this way.

  the catch is done outside of the async function so that the person calling it can decide what to do with the promise.
  The reason why is because of a concept called separation of concerns. the function is responsible for returning the response and not handling the error.
*/
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





