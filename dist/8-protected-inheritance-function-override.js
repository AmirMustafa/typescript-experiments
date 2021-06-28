"use strict";
class Department {
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
        console.log('employee info: ', this.employee);
    }
}
const accounting = new Department('d14', 'accounting');
accounting.addEmployee("Max");
accounting.addEmployee("Anna");
// accounting.printEmployee();
accounting.describe();
class ITDepartment extends Department {
    constructor(id, admin) {
        super(id, 'IT');
        this.admin = admin;
    }
    printAdmin() {
        console.log('admin data:', this.admin);
    }
    addEmployee(name) {
        if (name === "Max" || name === "Amir") {
            return;
        }
        this.employee.push();
    }
}
const accountingIT = new ITDepartment('d14', ['Amir', 'Max']);
accountingIT.printAdmin();
//# sourceMappingURL=8-protected-inheritance-function-override.js.map