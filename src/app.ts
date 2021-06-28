interface ValidatorConfig {
  [property: string]: {
    [validatableStringProp: string]: string[]; // required, positive
  };
}

const registererdValidators: ValidatorConfig = {};
function Required(target: any, propName: string) {
  registererdValidators[target.constructor.name] = {
    ...registererdValidators[target.constructor.name],
    [propName]: ["required"],
  };
}
function PositiveNumber(target: any, propName: string) {
  registererdValidators[target.constructor.name] = {
    ...registererdValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registererdValidators[obj.constructor.name];
  console.log(objValidatorConfig);
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]!) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value; // coercing to number

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input. Please try again.");
  }
  console.log(createdCourse);
});
