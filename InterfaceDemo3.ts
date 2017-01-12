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
var filterdEmps = employees.filter((x) => { return x.age > 35 || (x.age > 25 && x.age < 30) });

console.log("Employee having age greater than 35 and between 25 and 30");
filterdEmps.forEach((e) => {
    console.log("Id : " + e.empid);
    console.log("Name : " + e.empname);
    console.log("Age : " + e.age);
    console.log();
});