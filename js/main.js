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
    ];



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
function getPhotoInfo() {

    return {
    }
}

console.log("код в норме")