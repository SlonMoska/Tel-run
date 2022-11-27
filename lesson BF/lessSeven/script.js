// alert ('Hello World');

// console.log('Hello world');

// let first_name = "Yurii"; //string

// let num = 25; //number

// let question = true //boolean
// // let question = false //boolean

// num = 10; // просто сменили значение переменной

// const pi = 3.14; // нельзя изменить значение

// console.log(num);

// let result = prompt("Enter the number")   // title   показывает что должен ввести пользователь , default  что покажет если не чего не введенно.
// console.log(typeof (result));
// // typeof (result); показывает тип переменной

// let num = 25;

// let str1 = "Hello";
// let str2 = 'Hello';
// let str3 = `Hello ${num}`; // эти кавички нам позволяют вставлять переменние (метод интерпиляции)

// console.log(2 + 3); //5
// console.log(4 - 2); //2
// console.log(2 * 4); //8
// console.log(6 / 2); //3
// console.log(5 ** 2); //25 возвидение в степень
// console.log(11 % 2); //1 остаток от деления

// console.log("Yurii " + "Arkhypenko"); // интоксимация
// console.log("King's Landing")
// console.log('My "Name"')

// let first_name = "Yurii";
// let last_name = "Arkhypenko";

// console.log(first_name + " " + last_name);

// let first_name = "Yurii";
// let greeting = "Hello";

// console.log (`${greeting}, ${first_name}`);

//Задачка
// let r = 12;
// let g = 34;
// let b = 14;
// console.log ("rgb " +  r + " " + g + " " + b);
// console.log (`rgb(${r}, ${g}, ${b})`);

// let num = 123;
// let str = String(1234);

// console.log(typeof(num));
// console.log(typeof(str));

// let str = "123";
// let num = Number(1234);

// console.log(typeof(str));
// console.log(typeof(num));

// let str = "123";
// let num = +str;

// console.log(typeof(str));
// console.log(typeof(num));

// console.log('3' + 2); //32
// console.log('3' * 2); //6
// console.log('6' / 2); //3
// console.log('4' - 1); //3
// console.log(+'3' + 2); //5

//Задачка
// let age = prompt("How old you?") 
// let minutes = 60;
// let day = minutes * 24;
// let year = day * 365;
// alert (age * year);

//Задачка 2
// let number = prompt("number")
// console.log(number ** 2)

// Задачка 3
// let a = Number(prompt("number one"));
// let b = Number(prompt("number two"));
// console.log (a + b)

// Условия

// let num = Number(prompt("Enter the number"));

// if(num == 0){
//     console.log("Yes");
// }
// else if(num > 0){
//     console.log("plus")
// }

// else{
//     console.log("minus");
// }


// Строгое равенсто
// if("true" === true){
//     console.log("true")
// }

//Задачка
// let one = Number(prompt("number first"));
// let two = Number(prompt("number second"));

// if(one > two){
//     console.log(one);
// }
// else{
//     console.log(two);
// }

// Задачка 2

let number = Number(prompt("number"));
let result = Number(number % 2);
if (result == 0){
    console.log("Yes");
}
else{
    console.log("No");
}