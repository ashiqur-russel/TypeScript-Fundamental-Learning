// explicit types
var character;
var age;
var isLoggedIn;
// age='luigi' ; //not possible
age = 30;
//isLoggedIn = 25;  //Not possible
isLoggedIn = true;
//arrays 
var ninjas = [];
//ninjas = [10,30] // Not posisble
ninjas.push('shaun'); // Not possible also but no  error here-> Browser error
//union types-> for mixed array
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi,age:30' };
//ninjaOne = []
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' }; // can not add extra property 
