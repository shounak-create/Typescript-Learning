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
