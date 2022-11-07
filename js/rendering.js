import { getAddInfo } from "./data.js";
import { getRandomNum } from "./utils.js";

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
console.log(rawData.offer.features)



Array.from(child.querySelector(".popup__features").children).forEach(function (item, index) {
    item.classList.forEach(function (subItem) {
        rawData.offer.features.forEach(function (dataItem) {
            if (!(subItem.includes(`--${dataItem}`))) {
                console.log(child.querySelector(".popup__features").children[index])
            }
        })
    })
})
// child.features.forEach(function(item){
// console.log(item)
// })

home.appendChild(child);

export { template };
