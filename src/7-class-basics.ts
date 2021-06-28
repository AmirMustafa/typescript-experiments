class Department2 {
    // public name:string;
    // private readonly id: number;
    private employee: string[] = [];

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