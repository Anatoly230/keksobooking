import { getAddInfo } from "./data.js";
import { getRandomNum } from "./utils.js";

function getFeatureList(featuresList) {
  featuresList.forEach(function (item) {
    let isСoincided = rawFeatures.some(function (featureItem) {
      return item.classList.contains(featureItem)
    })
    if (!isСoincided) {
      item.remove();
    }
  })
}

function addImages(imagePaths){
  const imageHome = child.querySelector(".popup__photos");
  const imageTemplate = imageHome.querySelector(".popup__photo").cloneNode(true);
  const tempImagePlace = document.createDocumentFragment();
  imageHome.querySelector(".popup__photo").remove();
  let imageChild;

  for (let path of imagePaths) {
   imageChild = imageTemplate.cloneNode(true);
    imageChild.src = path;
    tempImagePlace.appendChild(imageChild);
  }

  imageHome.appendChild(tempImagePlace)
}


const template = document.querySelector("#card").content.querySelector(".popup");
const home = document.querySelector("#map-canvas");
const child = template.cloneNode(true);
const offerFeatures = child.querySelectorAll(".popup__feature");
const rawData = getAddInfo();
const blockName = "popup__feature--"
const rawFeatures = rawData.offer.features.map(function (item) {
  return blockName + item;
})
const typeTranslate = {
  flat: "Квартира",
  bungalow: "Бунгало",
  house: "Дом",
  palace: "Дворец",
  hotel: "Отель",
}



child.querySelector(".popup__title").textContent = rawData.offer.title;
child.querySelector(".popup__text--price").childNodes[0].textContent = rawData.offer.price + " ";
child.querySelector(".popup__type").textContent = typeTranslate[rawData.offer.type];
child.querySelector(".popup__text--capacity").textContent = `${rawData.offer.rooms} комнат для ${rawData.offer.guests} гостей`;
child.querySelector(".popup__text--time").textContent = `Заезд после ${rawData.offer.checkin}, выезд до ${rawData.offer.checkout}`;
child.querySelector(".popup__description").textContent = rawData.offer.description;
// child.querySelector(".popup__photo").src = rawData.offer.photos;
child.querySelector(".popup__avatar").src = rawData.author.avatar;


getFeatureList(offerFeatures)

console.log(rawData);

console.log(child.querySelector(".popup__photo"));
console.log(imageTemlate);

home.appendChild(child);

export { renderData };
