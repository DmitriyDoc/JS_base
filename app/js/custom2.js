'use strict'

//Циклы
let it, itr, iw, id;

//For
for (it = 0; it < 10; it++) {
    console.log(it);
} 

for (itr = 0; itr < 10; itr++) {
    console.log(itr);
}

//While
iw = 0;
while (iw < 10) {
    console.log(iw);
        iw++
}

// Do Whiile
id = 0;
do console.log(id++); while (id < 10);


//Цепочки областей видимости

let num1 = 5;

let func1 = function () {
    let num1 = 10;
    console.log(num1); // 10
    let funcInner = function() {
        let num1;
        console.log(num1); // Undefined
        num1 = 15;
    }
    funcInner();
    console.log(num1); // 10
};

func1();

// Замыкания
let counter = (function(){
    let count = 0;
    return function(num){
        count = num !== undefined ? num : count;
        return count++;
    }
}());

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter(100)); // 100
console.log(counter()); // 101
console.log(counter()); // 102 
console.log(counter(0)); // 0
console.log(counter()); // 1


let func2 = function(){
    let i = 10;
    return function(){
        return i;
    }
};

let anotherFunc = func2();

let func3 = function(){
    let i = 20;
    console.log(i); // 20
    console.log(anotherFunc()); // 10

};

func3();

// Обработка исключений

let calculate = function(n) {
    if (n > 10) throw new Error(" n should be less than 10");
    return n + 10;
};
//calculate(30); //Uncaught Error:  n should be less than 10

try {
    calculate(30);
} catch (e) {
    console.log("Can't execute calculate: " + e.message);
}
