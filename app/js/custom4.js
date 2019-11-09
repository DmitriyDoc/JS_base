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

