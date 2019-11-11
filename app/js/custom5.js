'use strict'

// JSON

let player = {
    name: "Frank",
    id: 32322,
    lastVisit: Date.now(),
    friends: [2323, 43344, 24244],
    toJSON: function() {
        return {
            name: this.name,
            lastVisit: this.lastVisit
        }
    }
    
};
let playerData = JSON.stringify(player);
console.log(playerData); // {"name":"Frank","lastVisit":1573482315168}
console.log(JSON.parse(playerData)); // {name: "Frank", lastVisit: 1573482315168}

// Массивы

let months = ["January", "February", "March", "April"];

months[4] = "May";

console.log(months); // ["January", "February", "March", "April", "May"]
console.log(months.length); // 5

months[months.length] = "June";
console.log(months); // ["January", "February", "March", "April", "May", "June"]

months[20] = "Something";
console.log(months); // ["January", "February", "March", "April", "May", "June", empty × 14, "Something"]
console.log(months.length); // 21

console.log(typeof(months)); // Object

let myArray = new Array(34);
console.log(myArray); // [empty × 34]
console.log(myArray.length);  // 34

let thirdArray = [,,];
console.log(thirdArray); // [empty × 2]
console.log(thirdArray.length); // 2

let array1 = ["Some string", "Another string", "Third string"];

console.log(array1.join('|')); // Some string | Another string | Third string
console.log(array1.reverse()); // ["Third string", "Another string", "Some string"]
console.log(array1.concat("Hello!", ["Even More","Strings"])); // ["Third string", "Another string", "Some string", "Hello!", "Even More", "Strings"]
console.log(array1.slice(2)); // ["Some string"]
console.log(array1.splice(1, 1, "WebDev")); // ["Another string"]
console.log(array1); //  ["Third string", "WebDev", "Some string"]

array1.push("Javascript");
console.log(array1); // ["Third string", "WebDev", "Some string", "Javascript"]
array1.unshift("Hello there!");
console.log(array1); // ["Hello there!", "Third string", "WebDev", "Some string", "Javascript"]

console.log(array1.pop()); // Javascript
console.log(array1.pop()); // Some string
console.log(array1.pop()); // WebDev

console.log(array1.shift()); // Hello there!
console.log(array1); // ["Third string"]

// ES5 методы массивов

let arrayR = ["Some string", "Another string", "Third string", "Javascript"];

arrayR.forEach(function(element, index, array){
    arrayR[index] = element.toUpperCase();
});


console.log(arrayR); // ["SOME STRING", "ANOTHER STRING", "THIRD STRING", "JAVASCRIPT"]