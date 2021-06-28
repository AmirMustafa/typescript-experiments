class DepartmentNew {
    static fiscalYear = 2020;
    protected employee: string[] = [];

    constructor(public name: string) {
        this.name = name;
        DepartmentNew.fiscalYear = 2022;
    }

    static createEmployee(name: string) {
        return { name:name };
    }
}

const depAc = new DepartmentNew('accounting');

const employee = DepartmentNew.createEmployee('Max');  // Static method are accessed from class
console.log(employee);
console.log(DepartmentNew.fiscalYear    );
