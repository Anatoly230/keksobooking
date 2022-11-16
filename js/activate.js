function disableElements(array, tumbler = true) {

  try {
    if (!Array.isArray(array)) {
      throw new Error("тип данных должен быть массивом, введите массив")
    }
    if (array.length < 1) {
      throw new Error("массив пуст,нет ни одного элемпента для внесения изменений")
    }
    array.forEach(function (item) {
      item.disabled = Boolean(tumbler);
    })
  } catch (err) {
    console.log(err)
  }
}

function putTogether(array) {
  try {
    if (array === undefined || array.length < 1) {
      throw new Error("нет никаких данных, внесите данные для поиска элемента")
    }
    let tempArray = [];
    if (!Array.isArray(array)) {
      array = Array.from(arguments);
    }
    array.forEach(function (item) {
      tempArray.push(...Array.from(document.querySelectorAll(item)))
    })
    return tempArray;
  } catch (err) {
    console.log(err)
  }
}

// function removeUnused(toRemove, buch) {
//   try {
//     if (toRemove === undefined || all.length < 1 && typeof(all[0] !== "string")) {
//       throw new Error("внесите массив из которого необходимо изьять неиспользуемые елементы")
//     }
//     if (toRemove.length < 1) {
//       return all;
//     }
//     let tempArray = [],
//       collector = [];
//       toRemove.forEach(function (item) {
//       collector = putTogether(all).filter(function (item) {
//         return !item.classList.contains("map__filter")
//       })
//       tempArray.push(...collector)
//     })
//     return tempArray;
//   } catch (err) {
//     console.log(err)
//   }
// }

let toDisable = ["input", "button", "select", "textarea"]

let buch = putTogether(toDisable).filter(function (item) {
  return !item.classList.contains("map__filter")
})

function deactivateInputs(elements) {
  disableElements(elements);
}

function activateInputs(elements) {
  disableElements(elements, false);
}

export {deactivateInputs, activateInputs, buch};
