let a:number = 5
let b:string = "Hello"
let c:boolean = true
let d:any = "This can be any type"
let e: number[] = [1, 2, 3, 4, 5]
let f: string[] = ["TypeScript", "JavaScript", "Python"]
let g: (number | string | boolean)[] = [1, 2, 3, 4, 5, 'six', 10, 'eleven', false];

// Function with typed parameters and return type
function add(x: number, y: number): number {
    return x + y;
}

// Using the function
let sum = add(10, 20);
console.log("Sum:", sum);

// Interface to define the shape of an object
interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "Alice",
    age: 30
};
console.log("Person:", person);

// Enum to define a set of named constants
enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Green;
console.log("Favorite Color:", Color[favoriteColor]);

// Tuple to define an array with fixed types
let tuple: [number, string, boolean] = [1, "Hello", true];
console.log("Tuple:", tuple);

// Union type to allow multiple types
let union: number | string = "This can be a string or a number";
console.log("Union:", union);
union = 42;
console.log("Union after reassignment:", union);

// Type assertion to tell the compiler about a variable's type
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
console.log("String Length:", strLength);


type A = {
    name: string;    
}

type B = {   
    age: number;
}

type C = A & B; // Intersection type

let personC: C = {
    name: "Bob",
    age: 25
};

console.log("Person C:", personC);


interface D {
    name: string;
}

interface E extends D {
    age: number;
}

let personE: E = {
    name: "Charlie",
    age: 28
};

console.log("Person E:", personE);


function greet (a: string, b: number): void {
   console.log("Hello " + a + " " + b);
}

greet("John", 2);


// use generics to create a function , object that can work with any type of data

function identity<T>(arg: T): T {
    return arg;
}

console.log("Identity with number:", identity<number>(42));
console.log("Identity with string:", identity<string>("Hello TypeScript"));

interface User<T>{
    name: string,
    age: T
}

let printUser:User<number> = {
    name: "David",
    age: 35
}

console.log("printUser:", printUser);


let printMoon:Moon = {
    name: "Luna",
    age: 4.5
}

console.log("printMoon:", printMoon);


// https://www.w3schools.com/js/exercise.asp?x=xrcise_object_property3
