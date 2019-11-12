'use strict'

// Window

setTimeout(function(){
    console.log("2 seconds paased Asynchronus"); // выполнится через 2 секунды
}, 2000);

console.log("Synchronous!"); // выполниться сразу

let btn = document.getElementById("btn");
let count = 0;
let timer = setInterval(function(){
    //console.log(count++); // выводит новое число через заданное время
}, 1000);

btn.onclick = function(){
    clearInterval(timer); // клик по кнопке останавливает счетчик (аналог clearTimeout)
};


// Location

console.log(window.location);

location.hash = "anything"; // в конец адрессной строки добавился #anything

console.log(location.toString()); // file:///D:/GitProject/JS_Lesson/app/index.html#anything
console.log("Current URL is: " + location); // Current URL is: file:///D:/GitProject/JS_Lesson/app/index.html#anything

let encoded = encodeURI(
    "http://google.com/page?name=Какое то имя"
);    
let decoded = decodeURI(
    "http://google.com/page?name=Какое то имя"
);    
console.log(encoded); // http://google.com/page?name=%D0%9A%D0%B0%D0%BA%D0%BE%D0%B5%20%D1%82%D0%BE%20%D0%B8%D0%BC%D1%8F
console.log(decoded); // http://google.com/page?name=Какое то имя

// Screen
console.log(screen.width, screen.height); // 1600 900
console.log(screen.availWidth, screen.availHeight); // 1600 860

// Navigator

console.log(navigator);







