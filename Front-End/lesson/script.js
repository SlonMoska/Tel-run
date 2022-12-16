// let, const, var.  Разница учить


// alert, prompt   Что это


// const age =  prompt("Haw old are you?");
// console.log(+age * 365);


// const num = "5";
// console.log(num, typeof num);


// const newNum = +num;
// console.log(newNum, typeof newNum)


// const number = prompt("Number");
// console.log(number**2);


// NaN
// console.log(+"a");
// console.log(+"5");

// console.log("b" + "a" + +"a" + "a");
// baNaNa


// const array = [1,7,5,4,3,2]
// for(let i = 0; i < array.length; i++) {
//   if(array[i] % 2 === 0 && array[i] !== 0) {
//     console.log(array[i]);
//   }
// }

const array = [15,8,4,2,4,7,12,35,45,58]
for (let i = 1; i < array.length; i++) {
  if (i % 3 === 0) {
      console.log(array[i]);
  }
}
