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
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"];



function getValueOfArguments(from, to) {
  if (typeof from !== "number") {
    return false;
  }
  if (from < 0) {
    from = Math.abs(from);
  }
  if (from > to) {
    [from, to] = [to, from];
  }

  return {
    from: from,
    to: to
  }
}

function getRandomNum(from = 1000, to = 0) {
  try {
    let range = getValueOfArguments(from, to);
    from = range.from,
      to = range.to;
    range = null;
    return Math.floor(Math.random() * (to - from + 1)) + from;
  } catch (err) {
    console.log(err)
    return false;
  }

}

function getRandomFloat(from = 1000, to = 0, countNum = 3) {
  try {
    let range = getValueOfArguments(from, to);
    from = range.from,
      to = range.to;
    range = null;
    return Number((Math.random() * (to - from + 1) + from).toFixed(countNum));
  } catch (err) {
    console.log(err.stack);
    return false;
  }
}

function getRandomLocation(x, y) {
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

  if (endInt > startInt) {
    result = getRandomNum(startInt, endInt);
    if(result === endInt){
      result = String(result)getRandomFloat(0,1,floatCount)
    }
  }
  return result;
}

function defineStringLength(str, charCount) {
  if (str.length > charCount) {
    return false;
  }
  return true;
}

function addPrefix(num, prefix = 0) {
  try {
    if (num === undefined || typeof num === "object") {
      throw new Error("Ошибка ввода, неоходимо ввести число либо строку")
    }
    if (num < 10) {
      return prefix + "" + num
    }
    return num + "";
  } catch (err) {
    console.log(err);
  }
}

function selectFromArray(array) {
  if (array.length < 1) {
    array = null;
    return false;
  }
  let index = getRandomNum(0, array.length - 1);
  return array[index];
}

function detachFromArray(array) {
  if (array.length < 1) {
    array = null;
    return false;
  }
  let index = getRandomNum(0, array.length - 1);
  return array.splice(index, 1)[0];
}

function arrayCopy(instance, target) {
  target.length = 0;
  for (let i = 0; i < instance.length; i++) {
    target[i] = instance[i];
  }
  return target;
}

function randomCountFromArray(arr, count) {
  let copyArr = [],
    result = [];
  arrayCopy(arr, copyArr);
  for (let i = 0; i <= count; i++) {
    result.push(detachFromArray(copyArr))
  }
  copyArr = null;
  return result;
}

function getAddInfo() {
  return {
    author: {
      avatar: "img/avatars/user" + addPrefix(getRandomNum(1, 10), prefix = 0) + ".png",
    },
    offer: {
      title: selectFromArray(TITLES),
      address: null,
      price: getRandomNum(),
      rooms: getRandomNum(1, 5),
      guests: getRandomNum(1, 10),
      checkin: selectFromArray(RESIDENCE),
      checkout: selectFromArray(RESIDENCE),
      features: randomCountFromArray(FEATURES, getRandomNum(0, FEATURES.length - 1)),
      description: selectFromArray(DESCRIPTIONS),
      photos: randomCountFromArray(PHOTOS, getRandomNum(0, PHOTOS.length - 1)),
    },
    location: {
      lat: getRandomFloat(),
      lng: getRandomFloat(),
    }
  }
}

console.log("код в норме")
