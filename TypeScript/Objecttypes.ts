// Create an interface Car with brand (string), model (string), and an optional year (number). Create two car objects — one with year, one without.

interface Car {
    brand:string;
    model:string;
    year?:number;
}

let e: Car = {brand:"totoya",model:"X"}
let y: Car = {brand:"toyota",model:"Y",year:2024}
console.log(e);
console.log(y);

// Create an interface Book with a readonly isbn (string), title (string), pages (number). Try to reassign isbn after creating the object and note the error.

interface Book {
    readonly isbn:string;
    title:string;
    pages:number;
}
let x:Book = {isbn:"sjdf",title:"sdfnn",pages:200}
console.log(x);
// x.isbn = "jjj"
// console.log(x);

// Create an interface Animal with name (string). Create an interface Dog that extends Animal and adds breed (string). Create a Dog object.
interface Animal{
    name:string
}

interface Dog extends Animal{
    breed:string
}

let dg:Dog = {name:"window",breed:"husky"}
console.log(dg);

// Using type, create Vehicle = { wheels: number } and Motorized = { engine: string }. Combine them into Car using &, and create a car object with both properties.
type Vehicle={
    wheels:number;
};
type Motorized={
        engine:string;
};

type Car1 = Vehicle & Motorized;

let C1:Car1 = {wheels:4,engine:"V8"};
console.log(C1);


// Create an interface Employee with name (string) and a nested address object containing city (string) and pincode (number). Create one employee object and log employee.address.city.

interface Employee{
    name:string;
    address:{
        city:string,
        pincode:number
    }
}
let e1:Employee = {
    name:"ABC", address:{city:"pune",pincode:22}
}
console.log(e1);
console.log(e1.address.city);
