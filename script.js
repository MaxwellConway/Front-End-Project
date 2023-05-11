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
    "https://eldenring.fanapis.com/api/weapons?limit=101",
    {
      method: "GET",
    }
  );

  const json = await weapons.json();
  const weaponsArray = json.data;
  console.log(weaponsArray[0].image);

  const homeWeaponThumbnail = document.getElementById("homeWeaponThumbnail");
  let weaponThumb = document.createElement("img");
  weaponThumb.src = weaponsArray[0].image;
  homeWeaponThumbnail.append(weaponThumb);
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
  console.log(sorceriesArray);
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
}

console.log(getIncantations());

//const buildCard =
//(ALL OF THE DATA THAT i WANT TO INCLUDE ON THE CARD AKA WEAPONS, SPELLS/INCANTS, PRIMARY STATS, STATUS EFFECTS/DAMAGE TYPES?, TALISMANS)
//
