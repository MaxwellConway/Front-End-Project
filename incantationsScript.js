async function getIncantations0() {
  const incantations = await fetch(
    "https://eldenring.fanapis.com/api/incantations?limit=100&page=0",
    {
      method: "GET",
    }
  );

  const json = await incantations.json();
  const incantationsArray = json.data;

  function getIncantations(array) {
    for (let i = 0; i < array.length; i++) {
      const nameData = array[i].name.replace(" ", "+");
      let weaponUrl = document.createElement("a");
      weaponUrl.href = `https://eldenring.wiki.fextralife.com/${nameData}`;
      thumbnailBox.append(weaponUrl);
      weaponUrl.className = `filterDiv ${array[i].description}`;

      const itemContainer = document.createElement("container");
      itemContainer.className = "itemContainer";

      let weaponImg = document.createElement("img");
      weaponImg.src = array[i].image;
      if (weaponImg && weaponImg.style) {
        weaponImg.style.height = "200px";
        weaponImg.style.width = "200px";
      }
      itemContainer.append(weaponImg);
      let weaponName = document.createElement("p");
      weaponName.className = "itemLabel";

      weaponName = array[i].name;
      itemContainer.append(weaponName);

      weaponUrl.append(itemContainer);
    }
  }
  async function getIncantations1() {
    const incantations = await fetch(
      "https://eldenring.fanapis.com/api/incantations?limit=100&page=1",
      {
        method: "GET",
      }
    );

    const json = await incantations.json();
    const incantationsArray = json.data;

    function getIncantations(array) {
      for (let i = 0; i < array.length; i++) {
        const nameData = array[i].name.replace(" ", "+");
        let weaponUrl = document.createElement("a");
        weaponUrl.href = `https://eldenring.wiki.fextralife.com/${nameData}`;
        thumbnailBox.append(weaponUrl);
        weaponUrl.className = `filterDiv ${array[i].category}`;

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
    getIncantations(incantationsArray);
    async function getIncantations2() {
      const incantations = await fetch(
        "https://eldenring.fanapis.com/api/incantations?limit=100&page=2",
        {
          method: "GET",
        }
      );

      const json = await incantations.json();
      const incantationsArray = json.data;

      function getIncantations(array) {
        for (let i = 0; i < array.length; i++) {
          const nameData = array[i].name.replace(" ", "+");
          let weaponUrl = document.createElement("a");
          weaponUrl.href = `https://eldenring.wiki.fextralife.com/${nameData}`;
          thumbnailBox.append(weaponUrl);
          weaponUrl.className = `filterDiv ${array[i].category}`;

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
      getIncantations(incantationsArray);
      async function getIncantations3() {
        const incantations = await fetch(
          "https://eldenring.fanapis.com/api/incantations?limit=100&page=3",
          {
            method: "GET",
          }
        );

        const json = await incantations.json();
        const incantationsArray = json.data;

        function getIncantations(array) {
          for (let i = 0; i < array.length; i++) {
            const nameData = array[i].name.replace(" ", "+");
            let weaponUrl = document.createElement("a");
            weaponUrl.href = `https://eldenring.wiki.fextralife.com/${nameData}`;
            thumbnailBox.append(weaponUrl);
            weaponUrl.className = `filterDiv ${array[i].category}`;

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
        getIncantations(incantationsArray);

        function click() {
          document.getElementById("showAll").click();
        }

        click();
      }

      console.log(getIncantations3());
    }

    console.log(getIncantations2());
  }

  console.log(getIncantations1());
  getIncantations(incantationsArray);
}

console.log(getIncantations0());

// Button filter functions

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function click() {
  document.getElementById("showAll").click();
}

click();
