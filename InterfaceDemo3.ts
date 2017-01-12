class Employee {
    public empid: number;
    public empname: string;
    public age: number;

    constructor(_empid: number, _empname: string, _age: number) {
        this.empid = _empid;
        this.empname = _empname;
        this.age = _age;
    }
}

//create an array of Employee
let employees: Employee[] = [
    new Employee(1, "Emp1", 22),
    new Employee(2, "Emp2", 25),
    new Employee(3, "Emp3", 27),
    new Employee(4, "Emp4", 31),
    new Employee(5, "Emp5", 30),
    new Employee(6, "Emp6", 35),
    new Employee(7, "Emp7", 37),
    new Employee(8, "Emp8", 40),
    new Employee(9, "Emp9", 36),
    new Employee(10, "Emp10", 39)
];

//Filter array based on following conditions:
//criteria 1: Having age greater than 35
//criteria 2: Having age between 25 and 30
interface IFilter {
    (emp: Employee): boolean;
}

function Filter(source: Employee[], func: IFilter): Employee[] {
    let temp: Employee[] = [];

    source.forEach((e) => {
        if (func(e)) {
            temp.push(e);
        }
    });

    return temp;
}

var filterdEmps = Filter(employees, AgeGreaterthan35);

console.log("Employee having age greater than 35 and between 25 and 30");
filterdEmps.forEach((e) => {
    console.log("Id : " + e.empid);
    console.log("Name : " + e.empname);
    console.log("Age : " + e.age);
    console.log();
});

filterdEmps = Filter(employees, AgeBtn25and30);

console.log("Employee age between 25 and 30");
filterdEmps.forEach((e) => {
    console.log("Id : " + e.empid);
    console.log("Name : " + e.empname);
    console.log("Age : " + e.age);
    console.log();
});

function AgeGreaterthan35(emp: Employee): boolean {
    return emp.age > 35;
}

function AgeBtn25and30(emp: Employee): boolean {
    return emp.age >= 25 && emp.age <= 30
}
