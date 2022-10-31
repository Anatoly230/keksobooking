function makeWorker(name) {


  // let lexicalEnvironment = {
  //   "Environment Record": {
  //     name: "Pete",
  //     surname: "Shishkin",
  //     this: window,
  //   },
  //   "Outer Lexical Environment": window.lexicalEnvironment["Environment Record"]
  // }
  return function () {
    console.log("Это " + name);
  };
}

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

function getObjects(callBack, length = 25) {
  try {
    if (callBack === undefined) {
      throw new Error("Необхлдимо добавить функцию конструткор")
    }
    if (typeof length === "object" || Number(length) !== Number(length) || Number(length) === 0) {
      throw new Error("Ошибка ввода данных, должно быть число не меньше 1")
    }
    return Array.from({ length: length }, callBack);
  } catch (err) {
    console.log(err)
  }
}

function checkModule() {
  try {
    console.log(`${testModul} подключена из соседнего модуля`);
  } catch (err) {
    if (err.name === "ReferenceError") {
      console.log("testModul не видна");
    }
  }
}

export { selectFromArray, getRandomNum, randomCountFromArray, addPrefix, getObjects };
