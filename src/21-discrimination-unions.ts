interface Bird {
  type: "bird"; // added common type for type check
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // added common type for type check
  runningSpeed: number;
}

type Animal = Bird | Horse;

let obj2: Animal;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Animal speed is " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 20 });
