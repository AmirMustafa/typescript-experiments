"use strict";
class AccountDepartment {
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
    get mostRecentEmployee() {
        if (this.employee.length !== 0) {
            return this.employee;
        }
        throw new Error("No employee found");
    }
    set mostRecentEmployee(value) {
        if (!value) {
            throw new Error("Please pass a valid employee");
        }
        this.addEmployee(value);
    }
}
const account = new AccountDepartment('d14', 'accounting');
account.addEmployee("Max");
account.addEmployee("Anna");
// account.printEmployee();
console.log(account.mostRecentEmployee);
account.mostRecentEmployee = "Nasir";
console.log(account.mostRecentEmployee);
//# sourceMappingURL=9-getters-setters.js.map