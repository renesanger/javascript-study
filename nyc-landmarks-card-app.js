const BOROUGH_MAP = {
  MN: "Maanhattan", BK: "Brooklyn", BX: "Bronx", QN: "Queens", SI: "Staten Island"
};

async function fetchLandmarks() {
  const params = new URLSearchParams({
    $limit: 150,
    $where: "lm_type='Individual Landmark'",
    $select: "lm_name,boroughid,lm_type,desdate,desig_addr,lp_number,the_geom",
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

function landmarkCard({lm_name:name,boroughid,lm_type:type,desdate,desig_addr,lp_number,the_geom}) {
  const borough = BOROUGH_MAP[boroughid] ?? boroughid;
  const year = desdate?.slice(0,4) ?? "unknown";
  const [lon,lat] = the_geom?.coordinates ?? [null,null];
  return `
  <div class="card">
    <h2>${name}</h2>
    <div>${borough}</div>
    <div>${type}</div>
    <div>${year}</div>
    <div>${desig_addr}</div>
    <div>${lp_number}</div>
    <div>${lon}</div>
    <div>${lat}</div>
  </div>
  `;
}

async function main() {
  const data = await fetchLandmarks();

  document.getElementById("body").innerHTML = data.map( landmark => landmarkCard(landmark)).join("")
}

main();


