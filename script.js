console.log(
  fetch("https://eldenring.fanapis.com/api/ammos?limit=100", {
    method: "GET",
  })
);

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", () => getAmmos());

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
