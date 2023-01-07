//  простые типы данных 

let num1, num2, str1, str2, strЗ, booll, user;

    num1 = 10;
    num2 = 7.5;
    str1 = "hello";
    str2 = 'hi';
    strЗ = null;
    booll = true;
    user = { name: "Ivan" };

 console.log  (typeof(num1)); // "number"
 console.log  (typeof(num2)); // "number"
 console.log  (typeof(str1)); // "string"
 console.log  (typeof(str2)); // "string"
 console.log  (typeof(str3)); // "undefined"
 console.log  (typeof(booll)); // "boolean"
 console.log  (typeof(user)); // "object"

//  циклы

let i = 0;

do {
   i += 1;
   console.log( "i: " + i );
} while (i < 5);

for (let x = 1; x < 5; x++) {
  console.log( x + " " );
}
// array

let arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
(arr); //получится массив ['a', 'b', 'c', 1, 2, 3]

// Операторы сравнения
console.log( 2 > 1 );  
console.log( 2 == 1 ); 
console.log( 2 != 1 );

console.log( 'Я' > 'А' );
console.log( 'Вода' > 'Кока' ); 
console.log( 'Малый' > 'Сон' ); 

// Логические операторы 
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false



// Условное ветвление: if
let year = prompt ("Year tomorrow")
if (year == 2023) {
  console.log( "Правильно!" );
  console.log( "Вы такой умный!" );
}

let yearToday = prompt("year tomorrow");

if (yearToday < 2023) {
  alert( "good");
} else if (year > 2023) {
  alert( "no good" );
} else {
  alert( 'Верно!' );
}