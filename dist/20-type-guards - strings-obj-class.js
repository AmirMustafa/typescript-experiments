"use strict";
// Eg C: Class
class Car {
    drive() {
        console.log('driving..');
    }
}
class Truck {
    drive() {
        console.log('driving a truck');
    }
    loadCargo(amount) {
        console.log('Load a cargo, charges apply $' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(50);
    }
}
useVehicle(v1);
useVehicle(v2);
const emp2 = {
    name: 'Amir',
    privileges: ['create-server'],
    startDate: new Date()
};
function printEmployeeInformation() {
    console.log(emp2.name);
    if ('privileges' in emp2)
        console.log(emp2.privileges);
    if ('startDate' in emp2)
        console.log(emp2.startDate);
}
printEmployeeInformation();
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// console.log(add2(5, 6));
//# sourceMappingURL=20-type-guards%20-%20strings-obj-class.js.map