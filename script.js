//console.log(
//  fetch("https://eldenring.fanapis.com/api/ammos?limit=100", {
//    method: "GET",
//  })
//);
//
//const searchButton = document.querySelector("#searchButton");
//searchButton.addEventListener("click", () => getAmmos());

async function getAmmos() {
  const ammos = await fetch(
    "https://eldenring.fanapis.com/api/ammos?limit=100",
    {
      method: "GET",
    }
  );

  const json = await ammos.json();
  const ammosArray = json.data;
  console.log(ammosArray);
  return ammosArray;
}

console.log(getAmmos());

async function getWeapons() {
  const weapons = await fetch(
    "https://eldenring.fanapis.com/api/weapons?limit=100",
    {
      method: "GET",
    }
  );

  const json = await weapons.json();
  const weaponsArray = json.data;
  console.log(weaponsArray[4].image);
  //appending thumbnail
  const weaponThumb = document.getElementById("weaponThumb");
  let weaponImg = document.createElement("img");
  weaponImg.src = weaponsArray[4].image;
  weaponThumb.append(weaponImg);
}

console.log(getWeapons());

async function getSorceries() {
  const sorceries = await fetch(
    "https://eldenring.fanapis.com/api/sorceries?limit=100",
    {
      method: "GET",
    }
  );

  const json = await sorceries.json();
  const sorceriesArray = json.data;
  console.log(sorceriesArray[3].image);
  //appending thumbnail
  const sorceryThumb = document.getElementById("sorceryThumb");
  let sorceryImg = document.createElement("img");
  sorceryImg.src = sorceriesArray[3].image;
  sorceryThumb.append(sorceryImg);
}

console.log(getSorceries());

async function getIncantations() {
  const incantations = await fetch(
    "https://eldenring.fanapis.com/api/incantations?limit=100",
    {
      method: "GET",
    }
  );

  const json = await incantations.json();
  const incantationsArray = json.data;
  console.log(incantationsArray);
  //appending thumbnail
  const incantationThumb = document.getElementById("incantationThumb");
  let incantationImg = document.createElement("img");
  incantationImg.src = incantationsArray[3].image;
  incantationThumb.append(incantationImg);
}

console.log(getIncantations());

//const buildCard =
//(ALL OF THE DATA THAT i WANT TO INCLUDE ON THE CARD AKA WEAPONS, SPELLS/INCANTS, PRIMARY STATS, STATUS EFFECTS/DAMAGE TYPES?, TALISMANS)
//
