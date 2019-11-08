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