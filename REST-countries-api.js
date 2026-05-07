// Call the REST Countries API and display country facts

async function getData() {
  const url = "https://restcountries.com/v3.1/name/peru";

  try{
    let response = await fetch(url);
    if(!response.ok) {
      throw new Error("Not Okay");
    }
    const result = await response.json();
    // console.log(result);
    return result;
  }
  catch(err) {
    console.log(err.message);
  }
}

async function main() {
  let data = await getData();
  document.getElementById("body").innerHTML = 
  `<h2>Country: ${data[0].name.official} ${data[0].flag}</h2>
  <h2>Capital: ${data[0].capital}</h2>
  <h2>Population: ${data[0].population}</h2>
  <h2>Continent: ${data[0].continents[0]}</h2>
  `;
  console.log(data);
}

main();


