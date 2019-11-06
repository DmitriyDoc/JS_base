'use strict'

//Типы данных
let myNumber = 2525, // number
    myString = "Some string", //string
    myBool = true, // boolean
    myNull = null, // object (известная ошибка)
    myUndef = undefined; // undefined

//Объектные типы
let obj = {name: "string"},
    array = [1,2,3],
    regexp = /w+/g,
    func = function(){};

console.log(typeof(obj));  
console.log(typeof(array));
console.log(typeof(regexp)); 
console.log(typeof(func));

//Числа

//Унарные операторы
console.log(+10);
console.log(-10);
let i = 10;
console.log(++i);
console.log(--i);
console.log(i--);
console.log(i++);

//Бинарные операторы
console.log(5 + 10);
console.log(7 - 3);
console.log(5 * 9);
console.log(10 / 3); //3.333333333333335
console.log(10 % 3); //1 Остаток от деления

let n = 100;
    n+=20;
    n*=20;
    n/=20;

//Операторы отношения
console.log(5 > 10); //false
console.log(5 < 10); //true
console.log(10 >= 10); //true
console.log(8 <= 10); //true
console.log(10 === 10); //true
console.log(10 !== 10); //false 
console.log(10 == '10'); //true
console.log(10 === '10'); //false

//Встроенный объект MATH
console.log(Math.sqrt(25)); // 5
console.log(Math.pow(3,5)); //243
console.log(Math.PI); // 3.141592653589793
console.log(Math.random()*100 .toFixed(3)); //0.4853515863176354

//Бесконечность
console.log(typeof(Infinity)); //Number
console.log(Infinity * 5); //Infinity
console.log(Infinity + 5); //Infinity
console.log(Infinity * Infinity); //Infinity

console.log(-5 / 0); //-Infinity
console.log(0 / 0); //NaN
console.log(Infinity / Infinity); //NaN
console.log(Math.sqrt(-10)); //NaN 
console.log(NaN === NaN); //false  
 
//Строки
console.log("Hello where".length); // 11 длина строки
console.log("Another \"very \\ long\" string"); // \ знак экранирования

let string = "Sometimes the same is different";
console.log(string.length); // 31
console.log(string.charAt(string.length - 1)); // t
console.log(string.substring(10)); // the same is different
console.log(string.substring(10,21)); // the same is
console.log(string.slice(-12)); // is different
console.log(string.substr(14,4)); // same
console.log(string.lastIndexOf("me")); // 16
console.log(string.split(" ")); // Возвращает массив разделенный на пробелы
console.log(string[2]); // m
console.log(string.toLocaleLowerCase()); // Приводит к нижнему регистру
console.log(string.toLocaleUpperCase()); // Приводит к верхнему регистру


// Булев тип

console.log(true); //true
console.log(false); //false
console.log(5 === 5); //true
console.log(5 === 6); //false

console.log(Boolean(5)); // true

//Falsy values

console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean("")); //false

let s = "text"
if (s) {
    console.log("Its true"); // Its true
}


console.log(true && false); // false
console.log(true && true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(!false); //true
console.log(!true); //false

let a = 0,
    isTrue = false;
isTrue && (a = 5); 
console.log(a); // 0

let someString = "";
let newString = someString || "Default String";
console.log(newString); // Defaul String


