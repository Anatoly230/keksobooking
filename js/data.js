import { selectFromArray, getRandomNum, randomCountFromArray, addPrefix } from "./utils.js";

const TITLES = ["НОВИНКА!",
  "СЛУЧИЛОСЬ НЕВЕРОЯТНОЕ!",
  "ТАКОГО ЕЩЕ НЕ БЫЛО!",
  "Наконец-то свершилось: НОВИНКА!",
  "СЛУЧИЛОСЬ НЕВЕРОЯТНОЕ!",
  "ТАКОГО ЕЩЕ НЕ БЫЛО!",
  "Наконец-то свершилось:",
  "Революционное новшество в",
  "Новый способ",
  "Сокрушающий эффект",
  "Теперь Вам не нужно",
  "Последняя новость о",
  "Важное усовершенствование в",
  "Новый взгляд на ",
  "уже рядом",
  "Феноменальный прорыв в",
  "Неожиданная новость о ",
  "Ограниченное издание",
  "Революционная формула",
  "Только что появился ",
  "Неожиданный поворот в",
  "Совершен прорыв в",
  "Свершилось чудо:",
  "Срочное сообщение о",
  "Революционное новшество в",
  "Новый способ",
  "Сокрушающий эффект",
  "Теперь Вам не нужно",
  "Последняя новость о",
  "Важное усовершенствование в",
  "Новый взгляд на",
  "уже рядом",
  "Феноменальный прорыв в",
  "Неожиданная новость о ",
  "Ограниченное издание",
  "Революционная формула",
  "Только что появился ",
  "Неожиданный поворот в",
  "Совершен прорыв в",
  "Свершилось чудо:",
  "Срочное сообщение о ",
],
  DESCRIPTIONS = [
    "Смейтесь как только умеете, любите столько, сколько живете.",
    "Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.",
    "Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.",
    "Не позволяйте кому-то затушить ваши искры только потому, что их свет сияет в чьих-то глазах.",
    "Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.",
    "Улыбка — единственный тренд в моде, который актуален всегда.",
    "Никогда не ищите свое счастье там, где вы его однажды потеряли.",
    "Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.Моя жизнь меняется, потому что меняю ее я.",
    "Всегда начинайте свой день с хороших людей и кофе.",
    "Ни о чем не беспокойтесь.",
    "Потому что все лучшие умы на работе.",
    "Жизнь — это всего лишь серия крошечных чудес, поэтому обратите внимание на них.",
    "Живите во всех тех моментах, которые вы не можете выразить словами.",
    "Не ждите идеального момента.",
    "Берите каждый момент и делайте его идеальным.",
    "Признай это. Без меня, твоя жизнь была бы действительно скучной.",
    "Будьте счастливы в этот момент, потому что этот момент — и есть ваша жизнь.",
    "Я пыталась заниматься йогой, но в позе лотоса уснула.",
    "Я, возможно, никогда не буду лучшей, но я стараюсь быть лучшей твоей.",
    "Если вам никто не улыбнулся утром, я подарю вам одну из своих.",
    "Никогда не позволяйте никому скучать.",
    "Все только начинает становиться действительно хорошим.",
    "Я опять съела сладкое. А все потому, что каждую секунду в мире 200 человек празднуют свой день рождения!",
    "Мечтайте. Поверьте, в это. Добейтесь этого.",
    "Утром, только одна хорошая мысль меняет смысл целого дня.",
    "Надейтесь на лучшее, но не ждите этого. Смотрите вперед в будущее, но никогда не ждите, пока это произойдет.",
    "Любите меня, от этого я буду сиять еще ярче.",
    "Я точно знаю, кто я, и я чертовски горжусь этим."],
  TYPES = [
    "palace",
    "flat",
    "house",
    "bungalow",
    "hotel"],

  FEATURES = [
    "wifi",
    "dishwasher",
    "parking",
    "washer",
    "elevator",
    "conditioner"
  ],
  RESIDENCE = ["12:00", "13:00", "14:00"],
  PHOTOS = [
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"],
  LOCATIONS = generateLocation();

function getRandomLocation(x, y) {
  try {
    if (typeof x !== "string" || typeof y !== "string") {
      throw new Error("Ошибка типа данных, данны должны быть типа  'string' ")
    }
    let startInt,
      startFloat,
      endInt,
      endFloat,
      floatCount,
      result;
    String(x).split(".").forEach(function (item, index) {
      if (index === 0) {
        startInt = parseInt(item);
      } else {
        startFloat = item;
      }
    })

    String(y).split(".").forEach(function (item, index) {
      if (index === 0) {
        endInt = parseInt(item);
      } else {
        endFloat = item;
      }
    })

    floatCount = Math.max(startFloat.length, endFloat.length);


    result = getRandomNum(startInt, endInt);
    if (result === endInt) {
      result += "." + getRandomNum(Number(startFloat), Number(endFloat));
    } else {
      result += "." + getRandomNum(10 ** floatCount - 1);
    }

    return Number(result);
  } catch (err) {
    console.log(err)
    return false;
  }
}
function generateLocation() {
  let locX = getRandomLocation("35.65000", "35.70000"),
    locY = getRandomLocation("139.70000", "139.80000");

  return {
    get locX() {
      return locX;
    },
    get locY() {
      return locY
    },
    get address() {
      let temp = `${locX}, ${locY}`;
      locX = getRandomLocation("35.65000", "35.70000");
      locY = getRandomLocation("139.70000", "139.80000");
      return temp;
    }
  }
}

function getLocation() {
  return {
    lat: LOCATIONS.locX,
    lng: LOCATIONS.locY,
  };
}

function getOffer() {
  return {
    title: selectFromArray(TITLES),
    type: selectFromArray(TYPES),
    address: LOCATIONS.address,
    price: getRandomNum(5000, 25000),
    rooms: getRandomNum(1, 5),
    guests: getRandomNum(1, 10),
    checkin: selectFromArray(RESIDENCE),
    checkout: selectFromArray(RESIDENCE),
    features: randomCountFromArray(FEATURES, getRandomNum(0, FEATURES.length - 1)),
    description: selectFromArray(DESCRIPTIONS),
    photos: randomCountFromArray(PHOTOS, getRandomNum(0, PHOTOS.length - 1)),
  };
}

function getAuthor() {
  return {
    avatar: "img/avatars/user" + addPrefix(getRandomNum(1, 10)) + ".png",
  };
}

function getAddInfo() {
  return {
    author: getAuthor(),
    location: getLocation(),
    offer: getOffer(),
  };
}
export { getAddInfo };
