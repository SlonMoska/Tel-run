// const person = {
//   name: "Yurii",
// };
// person.age = 26
// console.log(person);
//  // last name

//  person["last name"] = "Test";
//  person.name = "Alex";
//   //delete

//   delete person.age;

//   console.log(person);

  // "cat" , 3=> ["cat", "cat", "cat"];

  // "cat" , 3=> {cat0: 0, cat1: 1, cat2: 2}

  // function createObj(string, num) {
  //   let result = {};
  //   for (let i = 0; i < num; i++) {
  //     result[string + i] = i;
  //   }
  //   return result;
  //   }
  //   console.log( createObj("cat", 3));
  
  //   //foo(5) => {0:0, 1: 1, 2: 2, 3: 3, 4: 4}

  //   function objWithNum(number) {
  //     let result = {};
  //     for (let i= 0; i<= number; i++) {
  //       result[i] = i;
  //     }
  //     return result;
  //   }

  //   console.log(objWithNum(4));


 
  //1. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.
  //  Пример: foo(1,6) => [1,2,3,4,5,6]

  // function number(x, y) {
  //   let num = [];
  //   if (x < y) {
  //     for (let i = x; i <= y; i++) num.push(i);
  //     return num;
  //   } else {
  //     for (let i = y; i <= x; i++) num.push(i);
  //     return num;
  //   }
  // }



  //2. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.
  //  Пример: foo(1,6) => [6,5,4,3,2,1]

  // function number(x, y) {
  //   let num = [];
  //   if (x > y) {
  //     for (let i = x; i >= y; i--) { 
  //       num.push(i);
  //   } 
  // } else {
  //     for (let i = y; i >= x; i--)  { 
  //       num.push(i);
  //   } 
  // }
  //   return num;
  // }
  // console.log (number(6, 1))

 

  // 3. В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.
  // const list = [5,6,8,9,2]
// v1
//   add = function(arr) {
//     return arr.reduce((a, b) => a + b, 0);
// };
 
// var arr = [5,6,8,9,2];
 
// var sum = add(arr);
// console.log(sum)

// v2
// const list = [5, 6, 8, 9, 2];
// let sum = 0;
// for (let i = 0; i < list.length; i++) {
//   sum += list[i];
// }
// console.log(sum);



// 4. В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.
// ]


// const list = [5,6,8,9,2,-6,-5,-8,-2]
// let sum = 0;
// for (let i = 0; i < list.length; i++) {
//   if (list[i] > 0 ) {
//     sum += list[i];
//   }
// }
// console.log(sum);



// 5. В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
// const list = [1,2,3,4,5,6,8,10]

// const list = [1,2,3,4,5,6,8,10]
// let sum1 = 0, sum2 = 0;
// for(let i =0; i < list.length; i++) {
//   if(list[i] % 2 === 0) {
//     sum1 += list[i];
//   }
//   else {
//     sum2 += list[i];
//   }
// }
// if (sum1 > sum2) {
//   console.log(sum1 - sum2)
// } else {
//   console.log(sum2 - sum1)
// }

// console.log(sum1 > sum2 ? sum1 - sum2 : sum2 - sum1);



// 6.Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает максимальное число из массива.
//v1
// const min = arr => arr.reduce((x, y) => Math.min(x, y));
// const max = arr => arr.reduce((x, y) => Math.max(x, y));
 
// var arr = [ 4, 5, 8, 2, 7, 1, 10 ];
 
// console.log("Min:", min(arr));
// console.log("Max:", max(arr));
 

// function maxNum(array) {
//   let max = array[0];
//   for (let i = 1; i < Array.length; i++) {
//     if (array[i] > max) max = array[i];
//   }
//   return max;
// }

// function minNum(array) {
//   let min = array[0];
//   for (let i = 1; i < Array.length; i++) {
//     if (array[i] < min) min = array[i];
//   }
//   return min;
// }
// console.log(maxNum([-5, -6, -8]));
// console.log(minNum([-7, -4, -5]));



// 7. Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg(среднее значение) с соответствующими значениями по массиву.


function createObj(array) {
  let result = {};
  let min = array[0],
      max = array[0];
      for (let i = 1; i <= Array.length; i++) {
        if(array[i] < min) min = array[i];
        if(array[i] > max) max = array[i];
      }
      let avg = (min + max) / Array.length;
      result.min = min;
      result.max = max;
      result.avg = avg;
      return result;
    }
    console.log(createObj([2, 4, 8]));

