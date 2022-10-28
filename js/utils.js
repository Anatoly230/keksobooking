let testModul = "test - module";
console.log("файл utils.js  обрабатывается ")

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


// create a function
let work = makeWorker();

// call it
work()

function User(name) {

  // методом объекта становится вложенная функция
  this.sayHi = function() {
    alert(name);
  };
}

let user = new User("John");
