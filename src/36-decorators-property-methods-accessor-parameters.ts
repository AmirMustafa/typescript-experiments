function Log(target: any, propertyName: string | Symbol) {
  console.log("Log1 ======>", "Property Decorator");
  console.log("target", target);
  console.log("name", propertyName);
  console.log("--------------------------------------------");
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Log2 ======>", "Accessor Decorator");
  console.log("target", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
  console.log("--------------------------------------------");
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Log3 ======>", "Method Decorator");
  console.log("target", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
  console.log("--------------------------------------------");
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Log4 ======>", "Paramater Decorator");
  console.log("target", target);
  console.log("name", name);
  console.log("position", position);
  console.log("-----------------------------  ---------------");
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

let product = new Product("Desk", 100);
