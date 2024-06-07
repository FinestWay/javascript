{{
/// ~ Simple Examples ==>
// * 1. Integers and String:

var x = 10
let y = 'hello'
console.log(x, y)

// * 2. List:
let list = [23,55,33]
console.log(list)



/// ~ Advanced Examples ==>
// * 1. Dictionary:
var student = {
    "name":"Roshan",
    "age": 19
}
console.log(student)


// * 2. Function returning a value:
function sub(a,b){
    return a-b;
}
let subtract = sub(1,2)
console.log(subtract);


// * 3. Classes and Objects:
class Student{
    constructor(name,rollNo,age,department){
        this.name;
        this.rollNo;
        this.age;
        this.department;
    }
}

let s = new Student();
s.name = "Roshan"
s.rollNo = 117
s.age = 19
s.department = "CS"
console.log(s);


/// ~ Important Concepts ==>
// * 1. Mutability : 

// a. Mutable values: it's value can be changed after they are created
let arr = [1,2,3]
arr.push(4)
arr.push(5)
console.log(arr); // * arr is [1,2,3,3]

// b. Immutable values: it's value can't be changed after they are created

const person = Object.freeze({ name: "Alice", age: 30 });  // Immutable object
person.age = 31;  // This operation will not change the object, as it's frozen
console.log(person);


// * 2. Variable Reassignment:
var x = 5;
x = 3;
console.log(x); // it's value is not changed, the new value is reassigned to the same variable


// * 3. Reference vs Value:
var a = 20;
var b = a;
b = 45;
console.log(a,b);

//  reference of same value is hold by non-primitive data-types

let l = [1,2,3]
let l2 = l;
l2.push(7)
console.log(l,l2);

}}
   
  
    
