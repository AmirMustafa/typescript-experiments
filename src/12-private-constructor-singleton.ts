class DepartmentNew2 {
    protected employee: string[] = [];

    constructor(public name: string, protected id: string) {
        this.name = name;
    }

    describe() {
        console.log(`
            DEPARTMENT: ${this.name}
            ID: ${this.id}    
        `);
    }
}


class ITDepartmntt extends DepartmentNew2 {
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

class AccountDepartmntt extends DepartmentNew2 {
    admin: string [];
    private static instance: AccountDepartmntt;

    private constructor(id: string, admin: string[]) {
        super(id, 'Account');
        this.admin = admin;
        this.id = id;
    }

    static getInstance () {
        if(AccountDepartmntt.instance) {
            return this.instance;
        }
        return this.instance = new AccountDepartmntt('d25', ['Max']);
    }
    describe() {
        console.log('ACCOUNTS DEPARTMENT: ' + this.id);
    }
}

// So here only once instance is used - despite calling multiple times
const accountt = AccountDepartmntt.getInstance();
console.log(accountt);

const accountt2 = AccountDepartmntt.getInstance();
console.log(accountt2);

// const accountingDepartmenttAC = new AccountDepartmntt('d12', ['Rana']);
// accountingDepartmentAC.describe();

