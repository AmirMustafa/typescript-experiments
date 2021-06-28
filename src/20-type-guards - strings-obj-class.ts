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

    loadCargo(amount: number) {
        console.log('Load a cargo, charges apply $' + amount );
    } 
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(50);
    }
}

useVehicle(v1);
useVehicle(v2);

// Eg B
type Admin2 = {
    name: string;
    privileges: string [];
};

type Employee2 = {
    name: string;
    startDate: Date;
}

type UnknownEmployee = Admin2 | Employee2;

const emp2:UnknownEmployee = {
    name: 'Amir',
    privileges: ['create-server'],
    startDate: new Date()
};

function printEmployeeInformation() {
    console.log(emp2.name);
    if('privileges' in emp2)
        console.log(emp2.privileges);
    
    if('startDate' in emp2)
        console.log(emp2.startDate);
}
printEmployeeInformation();

// Eg A
type Combinable2 = string | number;

function add2(a: Combinable2, b:Combinable2) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

// console.log(add2(5, 6));