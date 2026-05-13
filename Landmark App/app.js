const BOROUGH_MAP = {
  MN: "Manhattan", BK: "Brooklyn", BX: "Bronx", QN: "Queens", SI: "Staten Island"
};

let allLandmarks = [];  // store fetched data globally

function renderCards(data) {
  document.getElementById("card-grid").innerHTML = 
    data.map(landmark => landmarkCard(landmark)).join("");
}


function filterCards(query) {
  const q = query.toLowerCase().trim();

  const filtered = allLandmarks.filter(({ lm_name, boroughid, desig_addr }) => {
    return (
      lm_name?.toLowerCase().includes(q) ||
      boroughid?.toLowerCase().includes(q) ||
      desig_addr?.toLowerCase().includes(q)
    );
  });

  renderCards(filtered);
}



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
    <div class="card-top"></div>
    <div class="card-body">
      <div class="card-meta">
        <span class="borough-badge">${borough}</span>
        <span class="lp-number">${lp_number}</span>
      </div>
      <div class="card-name">${name}</div>
      <div class="type">${type}</div>
      <hr class="card-divider">

      <div class="card-row">
        <i class="ti ti-calendar"></i>
        Designated <span>${year}</span>
      </div>

      <div class="card-row">
        <i class="ti ti-map-pin"></i>
        <span>${desig_addr}</span>
      </div>

      ${lon && lat ? `
        <div class="card-row">
          <i class="ti ti-location"></i>
          <div class="card-coords">
            <span class="coord-pill">${lon.toFixed(4)}</span>
            <span class="coord-pill">${lat.toFixed(4)}</span>
          </div>
        </div>` : ""}
        </div>
        </div>
        `;
}

async function main() {
  allLandmarks = await fetchLandmarks();

 renderCards(allLandmarks);

document.getElementById("search").addEventListener("input", (e) => {
    filterCards(e.target.value);
  });
}



main();


