// Array -Массив

let fruits = ["Apple", "Banana"];
console.log(fruits.length); // длинна массива

let first_fruit = fruits[fruits.length - 1]; // доступ к элементу массива по индексу
console.log(first_fruit);

fruits.push("Mango"); // добавление элемента в конец массива
console.log(fruits);

fruits.pop(); // Удаление последнего элемента в массиве
console.log(fruits);

fruits.unshift("Mango"); // добавление элемента в начало массива
console.log(fruits);

// fruits.shift(); // удаление первого элемента в масиве
console.log(fruits);
 
// console.log(fruits.indexOf("Banana"));

let spl = fruits.splice(fruits.indexOf("Apple"),2);

console.log(spl)