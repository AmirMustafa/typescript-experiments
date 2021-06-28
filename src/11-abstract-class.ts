abstract class Departmnt {
    protected employee: string[] = [];

    constructor(public name: string, protected id: string) {
        this.name = name;
    }

    abstract describe(this: Departmnt): void;

    // describe() {
    //     console.log(`
    //         DEPARTMENT: ${this.name}
    //         ID: ${this.id}    
    //     `);
    // }
}


class ITDepartmnt extends Departmnt {
    admin: string [];
    constructor(id: string, admin: string[]) {
        super(id, 'IT');
        this.admin = admin;
        this.id = id;
    }

    describe() {
        console.log('IT DEPARTMENT: ' + this.id);
    }
}

class AccountDepartmnt extends Departmnt {
    admin: string [];
    constructor(id: string, admin: string[]) {
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

