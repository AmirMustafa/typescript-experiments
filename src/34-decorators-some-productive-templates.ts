// Decorator Factory
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);

    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template + p.name;
    }
  };
}

@WithTemplate("<h2>My Person Object</h2>", "app")
class Person6 {
  name = "Amir";

  constructor() {
    console.log("Constructor called..");
  }
}

const pers6 = new Person6();
console.log(pers6);
