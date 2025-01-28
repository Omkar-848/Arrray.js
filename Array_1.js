//An array in javascript is a data structure used to store multiple values in a single variable 
//it can hold various data types and allows for dynamic resizing 
//Elements are accessed by there index starting from 0
//Array is non primitive data type

let a = [];

let b = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
console.log(b);

//The Array constructor refers to a method of creating arrays by 
// invoking the array constructor function

let c = new Array (10,20,30);

console.log (c);

/// string they count how many numbers 
let courses = ["HTML","CSS","Javascript","React"];
console.log (courses.length);
let str= courses.toString(); // to prints words
console.log(str);


/// Array delete method
 let emp = {
    firstname: "Raj",
    lastname:"kumar",
    salary:40000
 }

 console.log(delete emp.salary);
 console.log(emp);


///Array in javascript 
let arr1 =[11,12,13];
let arr2 =[14,15,16];
let arr3 =[17,18,19];

let arr4 =arr1.concat(arr2,arr3);
console.log(arr4);
