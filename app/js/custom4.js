//Аксессоры и атрибуты свойств
let persona = {
    name: "Ivan",
    _age: 20,
    get age(){
        return this._age;
    },
    set age(value){
        this._age = value < 0 ? 0 : value > 122 ? 122 : value;  
    }
};
persona.age = 180;
console.log(persona.age); // 122
persona.age = -30;
console.log(persona.age); // 0
persona.age = 30;
console.log(persona.age); // 30


console.log(Object.getOwnPropertyDescriptor(persona, "name"));
console.log(Object.getOwnPropertyDescriptor(persona, "age"));

Object.defineProperty(persona, "gender", {
    value: "male",
    writable: false,
    enumerable: false,
    configurable: false
});

//Object.defineProperty(persona, "gender", {
   // writable: true // нужно переключить  configurable: true чтобы не было ошибки
//})

console.log(persona.gender); //male
persona.gender = "female"; // нужно переключить  writable: true чтобы изменить перезапись
console.log(persona.gender); //male
console.log("");



// Цикл для объектов
for (property in persona) {
    console.log(property); // нужно переключить enumerable: true и свойство gender будет выводиться
};

// Прототипы и наследование
let PersonP = {
    constructor: function(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greet: function() {
        console.log("Hi, my name is " + this.name);
    }
};

let personOne, personTwo, personThird, WebDeveloper, developer;

personOne = Object.create(PersonP).constructor("John", 35, "male");
personTwo = Object.create(PersonP).constructor("Jessica", 28, "female");
personThird = Object.create(PersonP).constructor("Bruce", 38, "male");

console.log(personOne.name); // John
console.log(personTwo.age); // 28
console.log(personThird.gender); // male

personOne.greet(); // Hi, my name is John
personTwo.greet(); // Hi, my name is Jessica
personThird.greet(); // Hi, my name is Bruce

WebDeveloper = Object.create(PersonP);
WebDeveloper.constructor = function(name, age, gender, skills) {
    PersonP.constructor.apply(this, arguments);
    this.skills = skills || [];
    return this;
};

WebDeveloper.develop = function() {
    console.log("Working...");
};

developer = Object.create(WebDeveloper).constructor("Jack", 21, "male",
            ["html","css","js","php","mysql"]);

console.log(developer.skills); //  ["html", "css", "js", "php", "mysql"]
console.log(developer.name); // Jack
developer.develop(); // Working...
developer.greet(); // Hi, my name is Jack            

//