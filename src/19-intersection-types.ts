type Combinable = string | number;
type Numbers = number | boolean | string;


type Universal = Combinable & Numbers;  // Infered by TS is number and string


const data: Universal = 'hello';   // string and numbers are only accepted


// Eg
type Admin = {
    name: string;
    privileges: string [];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmpoyee = Admin & Employee;   // Intersection

const emp:ElevatedEmpoyee = {
    name: 'Amir',
    privileges: ['create-server'],
    startDate: new Date()
};