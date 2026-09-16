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
