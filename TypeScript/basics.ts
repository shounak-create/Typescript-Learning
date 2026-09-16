//Declare variables for your name, age, and whether you're a student, with explicit type annotations.

let name: string = "ABC";
let age: number = 22;
let isStudent:boolean = true

console.log(name,age,isStudent);


// Create an array of your top 5 favorite technologies (strings).
let movies: string[] = ["interstellar","martian"]

for(let i:number = 0;i<movies.length;i++){
    console.log(movies[i]);
}

// Create a tuple representing a student record: [name, rollNumber, isPassed] where name is string, rollNumber is number, isPassed is boolean.
let StudentRecord: [string,number,boolean]= ["ABC",22,true]
for(let i:number = 0;i<StudentRecord.length;i++){
    console.log(StudentRecord[i]);
}

// Write a function square(n: number): number that returns the square of a number.
function square(n:number): number{
    return n*n
}
square(5);
//Write a function logMessage(msg: string): void that just prints the message (no return value).
function logMessage(msg:string):void{
    console.log(msg);
}
logMessage("No return in VOID...")
