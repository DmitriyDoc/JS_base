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
 






