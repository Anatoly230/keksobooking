import { raw } from "./data.js";


// setOfferFeatures instance start
// function setOfferFeatures(featuresList) {
//   featuresList.forEach(function (item) {
//     let isСoincided = rawFeatures.some(function (featureItem) {
//       return item.classList.contains(featureItem)
//     })
//     if (!isСoincided) {
//       item.remove();
//     }
//   })
// }

function setOfferFeatures(templateFeatures, rawFeatures) {
  let offerFeatures = getOfferFeatures(rawFeatures);
  templateFeatures.forEach(function (item) {
    let isСoincided = offerFeatures.some(function (featureItem) {
      return item.classList.contains(featureItem)
    })
    if (!isСoincided) {
      item.remove();
    }
  })
}
// setOfferFeatures instance end

function getOfferFeatures(dataItem) {
  return dataItem.offer.features.map(function (item) {
    return blockName + item;
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
const blockName = "popup__feature--";


const typeTranslate = {
  flat: "Квартира",
  bungalow: "Бунгало",
  house: "Дом",
  palace: "Дворец",
  hotel: "Отель",
}

function getAddings(data) {
  const fragment = new DocumentFragment();

  data.forEach(function (item) {
    fragment.append(renderData(item))
  })
  return fragment;
}


function renderData(dataItem) {
  const addItem = template.cloneNode(true);
  const offerFeatures = addItem.querySelectorAll(".popup__feature");
  setOfferFeatures(offerFeatures, dataItem);
  addImages(dataItem.offer.photos)
  addItem.querySelector(".popup__title").textContent = dataItem.offer.title;
  addItem.querySelector(".popup__text--price").childNodes[0].textContent = dataItem.offer.price + " ";
  addItem.querySelector(".popup__type").textContent = typeTranslate[dataItem.offer.type];
  addItem.querySelector(".popup__text--capacity").textContent = `${dataItem.offer.rooms} комнат для ${dataItem.offer.guests} гостей`;
  addItem.querySelector(".popup__text--time").textContent = `Заезд после ${dataItem.offer.checkin}, выезд до ${dataItem.offer.checkout}`;
  addItem.querySelector(".popup__description").textContent = dataItem.offer.description;
  addItem.querySelector(".popup__avatar").src = dataItem.author.avatar;
  addItem.querySelector(".popup__avatar").src = dataItem.author.avatar;
  return addItem;
}

function renderAddings(){
  home.appendChild(getAddings(raw));
}


export { renderAddings };
