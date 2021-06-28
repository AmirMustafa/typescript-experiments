class Department {
    // public name:string;
    // private readonly id: number;
    protected employee: string[] = [];

    constructor(private readonly id: string, public name: string) {
        this.id = id;
        this.name = name;
    }

    describe() {
        console.log(`
            DEPARTMENT: ${this.name}
            ID: ${this.id}    
        `);
    }

    addEmployee(employee: string) {
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
    admin: string [];
    constructor(id: string, admin: string[]) {
        super(id, 'IT');
        this.admin = admin;
    }

    printAdmin() {
        console.log('admin data:', this.admin);
    }

    addEmployee(name: string) {
        if(name === "Max" || name === "Amir") {
            return;
        }
        this.employee.push();
    }
}

const accountingIT = new ITDepartment('d14', ['Amir', 'Max']);
accountingIT.printAdmin();