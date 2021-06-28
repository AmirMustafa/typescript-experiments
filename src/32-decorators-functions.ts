// Decorator Function
function Logger(constructor: Function) {
  console.log("Logger....");
  console.log(constructor);
}

@Logger
class Person {
  name = "Amir";

  constructor() {
    console.log("Constructor called..");
  }
}

const pers = new Person();
console.log(pers);
