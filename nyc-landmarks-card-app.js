async function fetchLandmarks() {
  const params = new URLSearchParams({
    $limit: 150,
    $where: "lm_type='Individual Landmark'",
    // $select: "lm_name,lm_type",
    $order: "lm_name ASC",
  });

  const url = `https://data.cityofnewyork.us/resource/ncre-qhxs.json?${params}`;

  // const url = "https://data.cityofnewyork.us/resource/ncre-qhxs.json?$limit=150&$where=lm_type=%27Individual%20Landmark%27";

  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    const result = await response.json();
    return result;
  }
  catch(err){
    console.log("Fetch Failed: ", err);
    return [];
  }
}

async function main() {
  const data = await fetchLandmarks();
  console.log(data);
}

main();


