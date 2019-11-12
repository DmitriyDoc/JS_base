'use strict'

// Объект Math

console.log(Math.round(9.6)); // 10
console.log(Math.round(9.2)); // 9

console.log(Math.floor(9.6)); // 9
console.log(Math.ceil(9.2)); // 10

console.log(Math.min(6,9,2,5)); // 2 
console.log(Math.max(6,9,2,5)); // 9

console.log(Math.random());

let getRandom = function(min, max) {
    let result = Math.floor(Math.random() * (max - min)) + min;
    return result;
};

console.log(getRandom(10,20));
console.log(getRandom(100,-20));

// Класс Date

let date = new Date(1997, 3, 14, 10, 24, 22, 345);

console.log(date); //Tue Apr 01 1997 10:24:22 GMT+0400
console.log(date.getMilliseconds()); // 345
console.log(date.getHours()); // 10
console.log(date.getMinutes()); // 24
console.log(date.getSeconds()); // 22
console.log("");
console.log(date.getDay()); // 1
console.log(date.getDate()); // 14
console.log(date.getMonth()); // 3
console.log(date.getYear()); // 97
console.log(date.getFullYear()); // 1997
console.log("");
date.setDate(15);
console.log(date); // Tue Apr 15 1997 10:24:22 GMT+0400
console.log(date.getTime()); // 861085462345
console.log(new Date(1969, 0, 1).getTime()); // -31546800000
console.log(new Date(0)); // Thu Jan 01 1970 03:00:00 GMT+0300
console.log(date.getUTCHours()); // 6
console.log(date.toLocaleDateString()); // 15.04.1997
console.log(date.toLocaleTimeString()); // 10:24:22

console.log(new Date().toLocaleDateString()); //12.11.2019
console.log(Date.now()); // 1573541592909
