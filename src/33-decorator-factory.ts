// Decorator Function
function Logger5(anydata: number = 50) {
  return function (constructor: Function) {
    console.log("Logger....");
    console.log(anydata);
    console.log(constructor);
  };
}

const anydata = 100;

@Logger5(anydata)
class Person5 {
  name = "Amir";

  constructor() {
    console.log("Constructor called..");
  }
}

const pers5 = new Person5();
console.log(pers5);
