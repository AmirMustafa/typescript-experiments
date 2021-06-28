"use strict";
class Departmnt {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employee = [];
        this.name = name;
    }
}
class ITDepartmnt extends Departmnt {
    constructor(id, admin) {
        super(id, 'IT');
        this.admin = admin;
        this.id = id;
    }
    describe() {
        console.log('IT DEPARTMENT: ' + this.id);
    }
}
class AccountDepartmnt extends Departmnt {
    constructor(id, admin) {
        super(id, 'Account');
        this.admin = admin;
        this.id = id;
    }
    describe() {
        console.log('ACCOUNTS DEPARTMENT: ' + this.id);
    }
}
const accountingDepartmentIT = new ITDepartmnt('d14', ['Amir', 'Max']);
accountingDepartmentIT.describe();
const accountingDepartmentAC = new AccountDepartmnt('d12', ['Rana']);
accountingDepartmentAC.describe();
//# sourceMappingURL=11-abstract-class.js.map