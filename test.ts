// Decorator Factory
function Logger7() {
  console.log("1. LOGGER: Factory");
  // Decorator Function
  return function (constructor: Function) {
    console.log("2. LOGGER: Decorator");
    console.log(constructor);
  };
}

// Decorator Factory
function WithTemplate7(template: string, hookId: string) {
  console.log("3. TEMPLATE: Factory");
  // Decorator Function
  return function (constructor: any) {
    console.log("4. TEMPLATE: Decorator");

    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template + p.name;
    }
  };
}

// Decorator Call
@Logger7()
@WithTemplate7("<h2>My Person Object</h2>", "app")
class Person7 {
  name = "Amir";

  constructor() {
    console.log("Constructor called..");
  }
}

const pers7 = new Person7();
console.log(pers7);
