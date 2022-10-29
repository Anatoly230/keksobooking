let testModul = "test - module";
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

console.log("файл utils.js  обрабатывается ")


export {testModul, getValueOfArguments, getRandomNum};
