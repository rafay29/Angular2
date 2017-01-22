export class Employee {
    constructor(
        public empId: number,
        public name: string,
        public salary: number,
        public departmentName: string,
        public contactNumber?: string
    ) { }
}