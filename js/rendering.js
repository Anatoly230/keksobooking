import { raw } from "./data.js";
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

function addImages(imagePaths) {
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
const blockName = "popup__feature--"
const rawFeatures = raw[0].offer.features.map(function (item) {
  return blockName + item;
})

const typeTranslate = {
  flat: "Квартира",
  bungalow: "Бунгало", 
  house: "Дом",
  palace: "Дворец",
  hotel: "Отель",
}

function getAddings(data) {
  const fragment = new DocumentFragment();
  let child,
    offerFeatures;
  data.forEach(function (item) {
    child = template.cloneNode(true);
    fragment.append(renderData(child, item))
  })
  return fragment;
}

console.log(getAddings(raw));

function renderData() {
  child.querySelector(".popup__title").textContent = raw[0].offer.title;
  child.querySelector(".popup__text--price").childNodes[0].textContent = raw[0].offer.price + " ";
  child.querySelector(".popup__type").textContent = typeTranslate[raw[0].offer.type];
  child.querySelector(".popup__text--capacity").textContent = `${raw[0].offer.rooms} комнат для ${raw[0].offer.guests} гостей`;
  child.querySelector(".popup__text--time").textContent = `Заезд после ${raw[0].offer.checkin}, выезд до ${raw[0].offer.checkout}`;

  if (raw[0].offer.description.length < 1) {
    child.querySelector(".popup__description")
  }
  child.querySelector(".popup__description").textContent = raw[0].offer.description;
  child.querySelector(".popup__avatar").src = raw[0].author.avatar;
  child.querySelector(".popup__avatar").src = raw[0].author.avatar;
  addImages(raw[0].offer.photos)
  getFeatureList(offerFeatures)
  home.appendChild(child);
}

export { renderData };
