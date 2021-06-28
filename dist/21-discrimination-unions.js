"use strict";
let obj2;
function moveAnimal(animal) {
    let speed;
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
//# sourceMappingURL=21-discrimination-unions.js.map