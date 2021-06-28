function Autobind(
  _target: any,
  _methodname: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const btnFn = originalMethod.bind(this); // this inside get points to obj
      return btnFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const btn = document.querySelector("button")!;
btn.addEventListener("click", p.showMessage);
