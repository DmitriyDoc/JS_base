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





