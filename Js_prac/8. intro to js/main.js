// console.log("Hello world from main JS");
// var Hi = "Scaler!!";
// console.log(Hi);

// let hi2 = 'im using let'
// console.log(hi2);

// const hi3 = 'im using const'
// console.log(hi3);

// console.log(Hi + hi2 + hi3)

var a = 1;
console.log(a)

var a = false;
console.log(a)

let b = 1;
console.log(b)

b = 2;
console.log(b)

b = [1, 2, 3]
console.log(b)


const c = "hi im const"
// c = 1; TypeError: Assignment to constant variable.

const PI = 3.14;

// Array
/**
 * let arr = [1,2,3,4,5]
undefined
arr[0]
1
arr[3]
4
arr[3] = "hello"
'hello'
arr
(5) [1, 2, 3, 'hello', 5]
arr[4] = true
true
arr
(5) [1, 2, 3, 'hello', true]
arr.length
5
// methods
undefined
arr.push("last added")
6
arr
(6) [1, 2, 3, 'hello', true, 'last added']
arr.pop()
'last added'
arr
(5) [1, 2, 3, 'hello', true]
arr.unshift("added in beginning")
6
arr
(6) ['added in beginning', 1, 2, 3, 'hello', true]
arr.shift()
'added in beginning'
arr
(5) [1, 2, 3, 'hello', true]
 */


// Objects
/**
 * let person = {
    name: "Kanishk",
    age: 25,
    profession: "SDE",
    place: "India"
}
undefined
person.name
'Kanishk'
person.age
25
person.profession
'SDE'
person['place']
'India'
person.hobbies = ['Swim', 'Talk', 'Exercise']
(3) ['Swim', 'Talk', 'Exercise']
person
{name: 'Kanishk', age: 25, profession: 'SDE', place: 'India', hobbies: Array(3)}age: 25hobbies: (3) ['Swim', 'Talk', 'Exercise']name: "Kanishk"place: "India"profession: "SDE"[[Prototype]]: Object
person.address = {
    country: "India",
    city: {
        name: "BLR",
        state: "Karnataka",
        pincode: 450034
    }
}
{country: 'India', city: {…}}
person
{name: 'Kanishk', age: 25, profession: 'SDE', place: 'India', hobbies: Array(3), …}address: city: {name: 'BLR', state: 'Karnataka', pincode: 450034}name: "BLR"pincode: 450034state: "Karnataka"[[Prototype]]: Objectcountry: "India"[[Prototype]]: Objectage: 25hobbies: (3) ['Swim', 'Talk', 'Exercise']0: "Swim"1: "Talk"2: "Exercise"length: 3[[Prototype]]: Array(0)name: "Kanishk"place: "India"profession: "SDE"[[Prototype]]: Object
person.address.city.state
'Karnataka'
person.address.city
{name: 'BLR', state: 'Karnataka', pincode: 450034}
delete person.address.city.state
true
person.address.city
{name: 'BLR', pincode: 450034}
 */