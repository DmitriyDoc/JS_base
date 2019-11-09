'use strict'

// Объект
let person = {
    name: "Peter",
    age: 30,
    gender: "male",
    sayHi: function() {
        return "Hello!!!";
    }
}
person.age = 25;
person.userID = 5;

console.log(person.name); //Peter
console.log(person.gender); // male
console.log(person["age"]); // 30
console.log(person["gender"]); // male
console.log(person.userID); // male

console.log(person); // Выводит объект со всеми изменениями кроме функции
console.log(person.sayHi()); // Hello!!!

delete person.userID
console.log(person); // удалили свойство userID

let json = JSON.stringify(person);
console.log(json); // преобразуется в формате json

let jsonObj = JSON.parse(json);
console.log(jsonObj); // преобразуется назад в объект

let object1 = new Object();
console.log(object1); // выводит созданный объект

let object2 = Object.create({x: 10, y: 20});
object2.x = 20;
console.log(object2); // {x: 20}

console.log(object2.z); // undefined
console.log("z" in object2); // false

object2.z = undefined;
console.log(object2.z); // undefined
console.log("z" in object2); // true


// this не прямой вызов методов
let greet0 = function() {
    return "Hi! My name is " + this.name;
};

let person1 = {
    name: "John",
    greet: greet0
};

let person2 = {
    name: "Bob",
    greet: greet0
};

console.log(person1.greet()); // Hi! My name is John
console.log(person2.greet()); // Hi! My name is Bob
console.log(greet0); // вернет функцию 
console.log(this); // вернет объект window


let greet01 = function(greeting) {
    return greeting + "! My name is " + this.name;
};

let person00 = {
    name: "John",
    greet: greet01
};

let person11 = {
    name: "John",
    greet: greet01
};

let bound = greet01.bind(person11);
console.log(bound("Hello there")); // Hello there! My name is John









