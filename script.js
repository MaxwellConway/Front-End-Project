//console.log(
//  fetch("https://eldenring.fanapis.com/api/ammos?limit=100", {
//    method: "GET",
//  })
//);
//const searchButton = document.querySelector("#searchButton");

//searchButton.addEventListener("click", () => getAmmos());

async function getWeapons() {
  const weapons = await fetch("https://eldenring.fanapis.com/api/weapons", {
    method: "GET",
  });

  const json = await weapons.json();
  const weaponsArray = json.data;
  console.log(weaponsArray);
}

async function getSorceries() {
  const sorceries = await fetch("https://eldenring.fanapis.com/api/sorceries", {
    method: "GET",
  });

  const json = await sorceries.json();
  const sorceriesArray = json.data;
  console.log(sorceriesArray);
}

//const buildCard =
//(ALL OF THE DATA THAT i WANT TO INCLUDE ON THE CARD AKA WEAPONS, SPELLS/INCANTS, PRIMARY STATS, STATUS EFFECTS/DAMAGE TYPES?, TALISMANS)
//
