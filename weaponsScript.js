async function getWeapons1() {
  const weapons = await fetch(
    "https://eldenring.fanapis.com/api/weapons?limit=100&page=0",
    {
      method: "GET",
    }
  );

  const json = await weapons.json();
  const weaponsArray = json.data;

  function getWeapons(array) {
    for (let i = 0; i < array.length; i++) {
      const nameData = array[i].name.replace(" ", "+");
      let weaponUrl = document.createElement("a");
      weaponUrl.href = `https://eldenring.wiki.fextralife.com/${nameData}`;
      thumbnailBox.append(weaponUrl);

      const itemContainer = document.createElement("container");
      itemContainer.className = "itemContainer";

      let weaponImg = document.createElement("img");
      weaponImg.src = array[i].image;
      itemContainer.append(weaponImg);
      let weaponName = document.createElement("p");
      weaponName.className = "itemLabel";

      weaponName = array[i].name;
      itemContainer.append(weaponName);

      weaponUrl.append(itemContainer);
    }
  }
  async function getWeapons2() {
    const weapons = await fetch(
      "https://eldenring.fanapis.com/api/weapons?limit=100&page=2",
      {
        method: "GET",
      }
    );

    const json = await weapons.json();
    const weaponsArray = json.data;

    function getWeapons(array) {
      for (let i = 0; i < array.length; i++) {
        const nameData = array[i].name.replace(" ", "+");
        let weaponUrl = document.createElement("a");
        weaponUrl.href = `https://eldenring.wiki.fextralife.com/${nameData}`;
        thumbnailBox.append(weaponUrl);

        const itemContainer = document.createElement("container");
        itemContainer.className = "itemContainer";

        let weaponImg = document.createElement("img");
        weaponImg.src = array[i].image;
        itemContainer.append(weaponImg);
        let weaponName = document.createElement("p");
        weaponName.className = "itemLabel";

        weaponName = array[i].name;
        itemContainer.append(weaponName);

        weaponUrl.append(itemContainer);
      }
    }
    getWeapons(weaponsArray);
    async function getWeapons3() {
      const weapons = await fetch(
        "https://eldenring.fanapis.com/api/weapons?limit=100&page=3",
        {
          method: "GET",
        }
      );

      const json = await weapons.json();
      const weaponsArray = json.data;

      function getWeapons(array) {
        for (let i = 0; i < array.length; i++) {
          const nameData = array[i].name.replace(" ", "+");
          let weaponUrl = document.createElement("a");
          weaponUrl.href = `https://eldenring.wiki.fextralife.com/${nameData}`;
          thumbnailBox.append(weaponUrl);

          const itemContainer = document.createElement("container");
          itemContainer.className = "itemContainer";

          let weaponImg = document.createElement("img");
          weaponImg.src = array[i].image;
          itemContainer.append(weaponImg);
          let weaponName = document.createElement("p");
          weaponName.className = "itemLabel";

          weaponName = array[i].name;
          itemContainer.append(weaponName);

          weaponUrl.append(itemContainer);
        }
      }
      getWeapons(weaponsArray);
      async function getWeapons4() {
        const weapons = await fetch(
          "https://eldenring.fanapis.com/api/weapons?limit=100&page=4",
          {
            method: "GET",
          }
        );

        const json = await weapons.json();
        const weaponsArray = json.data;

        function getWeapons(array) {
          for (let i = 0; i < array.length; i++) {
            const nameData = array[i].name.replace(" ", "+");
            let weaponUrl = document.createElement("a");
            weaponUrl.href = `https://eldenring.wiki.fextralife.com/${nameData}`;
            thumbnailBox.append(weaponUrl);

            const itemContainer = document.createElement("container");
            itemContainer.className = "itemContainer";

            let weaponImg = document.createElement("img");
            weaponImg.src = array[i].image;
            itemContainer.append(weaponImg);
            let weaponName = document.createElement("p");
            weaponName.className = "itemLabel";

            weaponName = array[i].name;
            itemContainer.append(weaponName);

            weaponUrl.append(itemContainer);
          }
        }
        getWeapons(weaponsArray);
      }

      console.log(getWeapons4());
    }

    console.log(getWeapons3());
  }

  console.log(getWeapons2());
  getWeapons(weaponsArray);
}

console.log(getWeapons1());

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
