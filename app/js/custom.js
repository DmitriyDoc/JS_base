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


// Null и Undefined

console.log(typeof(null)); // object
console.log(typeof(undefined)); // undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

let temp;
let object = {name:"Ivan"};
let arr = [1,2,3,4];

console.log(temp); //undefined
console.log(object.lastName); //undefined
console.log(arr[4]); //undefined

function greet (name) {
    return "Hello" + " " + name;
}
console.log(greet("Ivan"));
console.log(greet());

// Преобразование типов
console.log(5 + "5"); // 55
console.log(typeof(5 + "5")); // string
console.log("5" * "4"); // 20
console.log("5" * "Hi"); // NaN
console.log(typeof("5" * "Hi")); // number

console.log("5" == 5); // true
console.log("0" == false) // true
console.log(0 == false); // true
console.log("5" == true) // false
console.log("" == false) // true
console.log(null == false) // false
console.log(null == true) // false
console.log(undefined == true) // false
console.log(undefined == false) // false
console.log(undefined == null) //  true
console.log(undefined === null) //  false

console.log(Number("555")); // 555
console.log(typeof(Number("555"))); // Number
console.log(String(222)); // "222"
console.log(typeof(String(222))); // String
console.log(Boolean(1)); // true
console.log(typeof(Boolean(1))); // Boolean

console.log(!!5); // true
console.log(!!0); // false
console.log(typeof(345 + "")); // String
console.log(typeof( +"454")); // Number

let number = 22;
console.log(typeof(number.toString())); // String
    number = 45;
console.log(number.toString(3)); // 1200    
    number = 5;
console.log(number.toString(2)); // 101  
console.log(typeof(false.toString())); // String

//Встроенные функции

console.log(parseInt("45 px", 10)); // 45   Number
console.log(parseFloat("12.45 em")); // 12.45 Number

console.log(typeof(String(Infinity))); // String
console.log(typeof(String(NaN))); // String
console.log(+""); // 0

console.log(!!""); // flase
console.log(!!NaN); // flase
console.log(!!0); // flase
console.log(!!null); // flase
console.log(!!undefined); // flase

console.log(!!"Hi"); // true
console.log(+"        4  e"); // NaN
console.log(parseInt("4 px")); // 4

console.log(+true); // 1 
console.log(+false); // 0   

let num = 5;
console.log(num.value); //Undefined
    num = "Hello";
console.log(num.value); //Undefined   
    num = null; 
//console.log(num.value); // Type error

//Условные инструкции

let name2 = "Dmitriy", homecity;

if (name2 === "John") {
    homecity = "Boston";
} else if (name2 === "Dmitriy") {
    homecity = "Rostov";
} else if (name2 === "Bill") {
    homecity = "LA";
}
console.log(homecity); // Rostov


let name3 = "Doe"
switch(name3) {
    case "John":  homecity = "Boston"; break;
    case "Dmitriy":  homecity = "Rostov"; break;
    case "Bill":  homecity = "LA";
    default: homecity = "Moscow"; 
}
console.log(homecity); // Moscow


let x = 5,
    text;
if (x > 10) {
    text = "x больше десяти";
} else if (x < 10) {
    text = "x меньше десяти";
} else {
    text = "x равен десяти";
}
console.log(text); // x меньше десяти

let x2 = 10,
    text2;
    text2 = x2 > 10 ? "x больше десяти" : x2 < 10  ? "x меньше десяти" : "x равен десяти"; 
console.log(text2); // x равен десяти


