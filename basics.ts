//Declare variables for your name, age, and whether you're a student, with explicit type annotations.

let name: string = "ABC";
let age: number = 22;
let isStudent:boolean = true

// Create an array of your top 5 favorite technologies (strings).
let movies: string[] = ["interstellar","martian"]

// Create a tuple representing a student record: [name, rollNumber, isPassed] where name is string, rollNumber is number, isPassed is boolean.
let StudentRecord: [string,number,boolean]= ["ABC",22,true]

// Write a function square(n: number): number that returns the square of a number.
function square(n:number): number{
    return n*n
}