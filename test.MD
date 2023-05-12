async function getWeapons() {
const weapons = await fetch(
"https://eldenring.fanapis.com/api/weapons?limit=100&page=0",
{
method: "GET",
}
);

const json = await weapons.json();
const weaponsArray = json.data;
// console.log(weaponsArray[4].image);
// //appending thumbnail
// const thumbnailBox = document.getElementById("thumbnailBox");
// let weaponImg = document.createElement("img");
// weaponImg.src = weaponsArray[4].image;
// thumbnailBox.append(weaponImg);

function getWeapons(array) {
for (let i = 0; i < array.length; i++) {
let weaponImg = document.createElement("img");
weaponImg.src = array[i].image;
thumbnailBox.append(weaponImg);
}
}
getWeapons(weaponsArray);
}

console.log(getWeapons());

async function getWeapons1() {
const weapons = await fetch(
"https://eldenring.fanapis.com/api/weapons?limit=100&page=1",
{
method: "GET",
}
);

const json = await weapons.json();
const weaponsArray = json.data;
// console.log(weaponsArray[4].image);
// //appending thumbnail
// const thumbnailBox = document.getElementById("thumbnailBox");
// let weaponImg = document.createElement("img");
// weaponImg.src = weaponsArray[4].image;
// thumbnailBox.append(weaponImg);

function getWeapons(array) {
for (let i = 0; i < array.length; i++) {
let weaponImg = document.createElement("img");
weaponImg.src = array[i].image;
thumbnailBox.append(weaponImg);
}
}
getWeapons(weaponsArray);
}

//async function getWeapons2() {
// const weapons = await fetch(
// "https://eldenring.fanapis.com/api/weapons?limit=100&page=2",
// {
// method: "GET",
// }
// );
//
// const json = await weapons.json();
// const weaponsArray = json.data;
// // console.log(weaponsArray[4].image);
// // //appending thumbnail
// // const thumbnailBox = document.getElementById("thumbnailBox");
// // let weaponImg = document.createElement("img");
// // weaponImg.src = weaponsArray[4].image;
// // thumbnailBox.append(weaponImg);
//
// function getWeapons(array) {
// for (let i = 0; i < array.length; i++) {
// let weaponImg = document.createElement("img");
// weaponImg.src = array[i].image;
// thumbnailBox.append(weaponImg);
// }
// }
// getWeapons(weaponsArray);
//}
//
//async function getWeapons3() {
// const weapons = await fetch(
// "https://eldenring.fanapis.com/api/weapons?limit=100&page=3",
// {
// method: "GET",
// }
// );
//
// const json = await weapons.json();
// const weaponsArray = json.data;
// // console.log(weaponsArray[4].image);
// // //appending thumbnail
// // const thumbnailBox = document.getElementById("thumbnailBox");
// // let weaponImg = document.createElement("img");
// // weaponImg.src = weaponsArray[4].image;
// // thumbnailBox.append(weaponImg);
//
// function getWeapons(array) {
// for (let i = 0; i < array.length; i++) {
// let weaponImg = document.createElement("img");
// weaponImg.src = array[i].image;
// thumbnailBox.append(weaponImg);
// }
// }
// getWeapons(weaponsArray);
//}
//
//async function getWeapons4() {
// const weapons = await fetch(
// "https://eldenring.fanapis.com/api/weapons?limit=100&page=4",
// {
// method: "GET",
// }
// );
//
// const json = await weapons.json();
// const weaponsArray = json.data;
// // console.log(weaponsArray[4].image);
// // //appending thumbnail
// // const thumbnailBox = document.getElementById("thumbnailBox");
// // let weaponImg = document.createElement("img");
// // weaponImg.src = weaponsArray[4].image;
// // thumbnailBox.append(weaponImg);
//
// function getWeapons(array) {
// for (let i = 0; i < array.length; i++) {
// let weaponImg = document.createElement("img");
// weaponImg.src = array[i].image;
// thumbnailBox.append(weaponImg);
// }
// }
// getWeapons(weaponsArray);
//}
//
