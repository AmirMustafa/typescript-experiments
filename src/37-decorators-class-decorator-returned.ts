function Template(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // const hookEl = document.getElementById(hookId);
    // if (hookEl) {
    //   hookEl.innerHTML = template;
    //   hookEl.querySelector("h2")!.innerHTML;
    // }
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h3")!.innerHTML += this.name;
        }
      }
    };
  };
}

@Template("<h3>My template</h3>", "app")
class Productt {
  name = "Amir";

  constructor() {
    console.log("Constructor called..");
  }
}

let productt = new Productt();
