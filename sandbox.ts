// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age='luigi' ; //not possible

age = 30;

//isLoggedIn = 25;  //Not possible
isLoggedIn = true;

//arrays 
let ninjas: string[] = [];

//ninjas = [10,30] // Not posisble
ninjas.push('shaun'); // Not possible also but no  error here-> Browser error

//union types-> for mixed array
let mixed: (string | number | boolean)[] = []
mixed.push('hello')
mixed.push(20);
mixed.push(false)
console.log(mixed)

let uid: string | number;
uid = '123';
uid = 123
//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi,age:30' };
//ninjaOne = []

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' } // can not add extra property 