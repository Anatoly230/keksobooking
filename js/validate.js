import { activateInputs, buch } from "./activate.js";
import { slider, changeEnd, changeStart, changeRange } from "./slider-generator.js";

const messagesRu = {
    required: "Это поле обязательное",
    email: "Введите корректный адресс",
    number: "Здесь необходимо число",
    integer: "Здесь должно быть целое число",
    url: "введите корректный адресс сайта",
    tel: "Необходимо ввести корректный номер телефона",
    maxlength: "Не больше ${1} символа",
    minlength: "Не меньше ${1} символа",
    min: "Minimum value for this field is ${1}",
    max: "Максимальное значение не должно превышать ${1}",
    pattern: "необходимо соотвествие формату",
    equals: "The two fields do not match"
}

const defaultConfig = {
    classTo: 'ad-form__element',
    errorClass: 'error-block',
    successClass: 'succes-block',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'error-text',
};

Pristine.addMessages('ru', messagesRu);
Pristine.setLocale('ru');

const form = document.querySelector('.ad-form'),
    title = form.querySelector('#title'),
    price = form.querySelector('#price'),
    rooms = form.querySelector('#room_number'),
    capacity = form.querySelector('#capacity'),
    typeOfHousing = form.querySelector('#type'),
    timein = form.querySelector('#timein'),
    timeout = form.querySelector('#timeout'),
    pristine = new Pristine(form, defaultConfig),
    roomProperty = {
        '1': ['1'],
        '2': ['2', '1'],
        '3': ['3', '2', '1'],
        '100': ['0']
    },
    typePropertes = {
        'bungalow': 0,
        'flat': 1000,
        'hotel': 3000,
        'house': 5000,
        'palace': 10000
    },
    roomsTranslation = getTranslateSelect(rooms),
    capacityTranslation = getTranslateSelect(capacity);
price.min = typePropertes[typeOfHousing.value]
price.placeholder = price.min;

function getTranslateSelect(select) {
    return Array.from(select).reduce(function (accum, item) {
        accum[item.value] = item.textContent;
        return accum;
    }, {})
}

function capacityValidate() {
    return roomProperty[rooms.value].includes(capacity.value)
}

function getErrorCapacitiText(arr) {
    return arr.reduce(function (accum, item) {
        if (accum === '') {
            accum += capacityTranslation[item];
        } else {
            accum += ', ' + capacityTranslation[item];
        }
        return accum;
    }, '')
}

function getCapacityErrorMessage() {
    return `
    ${roomsTranslation[rooms.value]} 
    ${getErrorCapacitiText(roomProperty[rooms.value])}
    `
}

function checkMinLength(value) {
    if (value.length < 1 || Number(value) !== Number(value)) {
        return false;
    }
    return true;
}


pristine.addValidator(rooms, capacityValidate, getCapacityErrorMessage)
pristine.addValidator(capacity, capacityValidate, getCapacityErrorMessage)

pristine.addValidator(price, checkMinLength, 'в это поле необходимо вставить цифру')

function startForm() {
    activateInputs(buch);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        pristine.validate();

    })
}

slider.noUiSlider.on('change', function () {
    price.value = Math.round(slider.noUiSlider.get());
})

price.addEventListener('change', function () {

    if (Number(price.value) === Number(price.value) && price.value <= 100000) {
        slider.noUiSlider.set(price.value)
    }
})

typeOfHousing.addEventListener('change', function () {
    price.min = typePropertes[typeOfHousing.value];
    price.placeholder = price.min;
    price.value = price.min;
    changeRange(price.max, price.min);
    changeStart(price.min);
})

function setCheckInCheckOut(sourceElement, targetElement) {
    Array.from(targetElement).forEach(function (item) {
        if (item.selected === true) {
            item.selected = false;
        }
        if (item.value === sourceElement.value) {
            item.selected = true;
        }
    })
}

timein.addEventListener('change', function () {
    setCheckInCheckOut(this,timeout);
})

timeout.addEventListener('change', function () {
    setCheckInCheckOut(this, timein);
})

changeRange(price.max, price.min);
window.addEventListener('load', startForm)

export { pristine }