/*
  Call the Open Trivia API (free, no key needed) and log results to console
*/

async function getData() {
  const url = "https://opentdb.com/api.php?amount=10";

  try{
    let response = await fetch(url);
    if(!response.ok) {
      throw new Error("Not Okay");
    }
    const result = await response.json();
    console.log(result);
  }
  catch(err) {
    console.log(err.message);
  }
}

getData();
