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

      const weaponContainer = document.createElement("container");

      let weaponImg = document.createElement("img");
      weaponImg.src = array[i].image;
      weaponContainer.append(weaponImg);
      let weaponName = document.createElement("p");
      weaponName = array[i].name;
      weaponContainer.append(weaponName);

      weaponUrl.append(weaponContainer);
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
        let weaponUrl = document.createElement("a");
        weaponUrl.href = "http://example.com";
        thumbnailBox.append(weaponUrl);

        const weaponContainer = document.createElement("container");

        let weaponImg = document.createElement("img");
        weaponImg.src = array[i].image;
        weaponContainer.append(weaponImg);
        let weaponName = document.createElement("p");
        weaponName = array[i].name;
        weaponContainer.append(weaponName);

        weaponUrl.append(weaponContainer);
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
          let weaponUrl = document.createElement("a");
          weaponUrl.href = "http://example.com";
          thumbnailBox.append(weaponUrl);

          const weaponContainer = document.createElement("container");

          let weaponImg = document.createElement("img");
          weaponImg.src = array[i].image;
          weaponContainer.append(weaponImg);
          let weaponName = document.createElement("p");
          weaponName = array[i].name;
          weaponContainer.append(weaponName);

          weaponUrl.append(weaponContainer);
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
            let weaponUrl = document.createElement("a");
            weaponUrl.href =
              "https://eldenring.wiki.fextralife.com/Ripple+Blade";
            thumbnailBox.append(weaponUrl);

            const weaponContainer = document.createElement("container");

            let weaponImg = document.createElement("img");
            weaponImg.src = array[i].image;
            weaponContainer.append(weaponImg);
            let weaponName = document.createElement("p");
            weaponName = array[i].name;
            weaponContainer.append(weaponName);

            weaponUrl.append(weaponContainer);
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
