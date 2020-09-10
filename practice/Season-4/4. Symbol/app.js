/*
******
****  Symbol();
******
*/
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(typeof sym2);

// const KEY1 = Symbol();
// const KEY2 = Symbol('key2');

// const myObj = {};
// myObj[KEY1] = 'prop1';
// myObj[KEY2] = 'prop2';
// myObj.key3 = 'prop3';
// myObj.key4 = 'prop54'

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// //  for...in loop
// for(let i in myObj){
//     console.log(`${i}: ${myObj[i]}`);
// }
// console.log(JSON.stringify({[Symbol('sym1')] : 'Jay Jagannath'}));

//DESTRUCTURING Assignment
// let a,b ;
// [a,b] = [100,200];
//Rest pattern
// [a, b, c, ...rest] = [200, 300, 400, 500, 600];
// console.log(rest);

//With Object
// ({a, b, c, ...rest} = {a:100, b:200, c:300, d:400, e:500});
// console.log(rest)

//Example
// const name = ['Jaga','Kalia','Balia','Matrey'];
// const [person1,person2,person3,person4] = name ;
// console.log(person1,person2,person3,person4);

// function getPeople() {
//     return ['Mike','Beth','John','Brad'];
// }
// let person1,person2,person3,person4 ;
// [person1,person2,person3,person4] = getPeople();

// console.log(person1,person2,person3,person4);

//Object Destructuring 

const person = {
    name: 'Pranab Acharya',
    age: 25,
    gender: 'Male',
    location: 'India'
}
const { name, age, gender } = person;
// console.log(name,age,gender);

/*
******
****  Map();
******
*/

const map1 = new Map();

const key1 = 'Strings',
    key2 = {},
    key3 = function () { },
    key4 = true;


map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');
map1.set(key4, 'Value of key4');

// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));
// console.log(map1.get(key4));

// Iterating through Maps by For...of (key: value)
for(let [key,value] of map1){
    // console.log(`${key}: ${value}`);
}

// Iterating through Maps by For...of only key
for(let key of map1.keys()){
    // console.log(key);
}

// Iterating through Maps by For...of only key
for(let value of map1.values()){
    // console.log(value);
}
// Iterating using ForEach
map1.forEach(function(value,key){
    // console.log(`${value}: ${key}`);
})

//convert to arrays key value
const keyValArr = Array.from(map1);
// console.log(Arr);

// only values
const ValArr = Array.from(map1.values());
// console.log(ValArr);
//only keys
const keyArr = Array.from(map1.keys());
// console.log(keyArr);

/*
******
****  Set();
******
*/
const set1 = new Set();

//There are two ways to add into Set
//Method 1
set1.add(100);
set1.add(true);
set1.add('String');
set1.add({name: 'Pranab'});

//Method 2
// const set2 = new Set([100,'string',true,{name:'Pranab'}]);


// console.log(set1);
// console.log(set1.size);

// set1.delete(true);  //delte items from set

//Iterate through For..of loop

for(let value of set1){
    // console.log(value);
}

//Iterate through forEach loop 
// set1.forEach((value) => console.log(value));

//Convert Set to Arrays
const valArr = Array.from(set1);
// console.log(valArr);

