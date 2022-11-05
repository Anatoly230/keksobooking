import {getAddInfo} from "./data.js";
import {getRandomNum} from "./utils.js";

const template = document.querySelector("#card").content.querySelector(".popup");
const home = document.querySelector("#map-canvas");
const child = template.cloneNode(true);
const rawData = getAddInfo();



child.querySelector(".popup__title")

child.querySelector(".popup__title").textContent = rawData.offer.title;
child.querySelector(".popup__text--price").childNodes[0].textContent = rawData.offer.price + " ";


console.log("источник для копировния", template);
console.log("Будущий дочерний элемент", child);
console.log("price", child.querySelector(".popup__text--price"))
console.log(home)
console.log(rawData)

home.appendChild(child);

export { template };
