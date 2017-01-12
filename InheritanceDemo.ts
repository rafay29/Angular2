class Shape { // base class
    private shapeName: string;

    constructor(_shapename) {
        this.shapeName = _shapename;
        console.log("Shape constructor called.");
    }

    public GetShapeDetails(): void {
        console.log("Shape Name: " + this.shapeName);
    }
}

class Circle extends Shape { //derived class
    private radius: number;

    constructor(shapename: string, radius: number) {
        //invoke super class constructor
        super(shapename);
        this.radius = radius;

        console.log("Circle constructor called.");
    }

    public GetShapeDetails(): void {
        super.GetShapeDetails();
        console.log("Radius: " + this.radius);
    }
}

class Square extends Shape { //derived class
    private length: number;
    private breadth: number;

    constructor(shapename: string, length: number, breadth: number) {
        //invoke super class constructor
        super(shapename);
        this.length = length;
        this.breadth = breadth;

        console.log("Square constructor called.");
    }

    public GetShapeDetails(): void {
        super.GetShapeDetails();
        console.log("Length: " + this.length);
        console.log("Breadth: " + this.breadth);
    }
}

let shapes:Shape[] = [
    new Shape("NA"),
    new Circle("Circle",30.35),
    new Square("Square",10,20)
];

//iterate the shapes array and get the overridden methods
shapes.forEach((s)=>{
    s.GetShapeDetails();
})