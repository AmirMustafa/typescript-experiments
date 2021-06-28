"use strict";
class Department2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // public name:string;
        // private readonly id: number;
        this.employee = [];
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`
            DEPARTMENT: ${this.name}
            ID: ${this.id}    
        `);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployee() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
// const accounting = new Department('d14', 'accounting');;
// accounting.addEmployee("Max");
// accounting.addEmployee("Anna");
// accounting.printEmployee();
// accounting.employee[3] = "Amir"; 
// console.log(accounting);
// accounting.describe();
// const accountingCopy = {name: 'Amir', describe: accounting.describe};
// accountingCopy.describe();
//# sourceMappingURL=7-class-basics.js.map