// 1 variant 1
function reverse(str) {
  let word = '', i;
  for (i = str.length - 1; i >= 0; i--) {
    word += str.charAt(i);
  }
  return word;
}
  console.log(reverse('hello world'));

// 1 variant 2
const word = 'Hello world!'
let reverseWord = '';

for (let x = word.length - 1; x >= 0; x--) {
    reverseWord = reverseWord + word[x]
};
console.log(reverseWord)

// 2
function palindromWordCheck(string) {
  const lastIndex = string.length - 1;

  for (let i = 0; i < string.length / 2; i++) {
      if (string[i] !== string[lastIndex - i]) {
          return false;
      }
  }
  return true;
}
console.log(palindromWordCheck("lookl"))
console.log(palindromWordCheck("lol"))

// 3
const multi = (n, maxNum) => {
  let number = [];
  for (let i = 1; i < maxNum; i++) {
    if (i % n === 0) {
      number.push(i);
    }
  }
  return number;
}
console.log(multi(5, 50));

4
const arr = [
  {title: 'smartphone', price: 939},
  {title: 'refrigerator', price: 39},
  {title: 'TV', price: 821},
  {title: 'car', price: 1821}
]

for(let x = 0; x < arr.length; x++) {
  console.log(arr[x].title)
}

// 5
for(let x = 0; x < arr.length; x++)
 {
  console.log(`<${arr[x].title}> (<${arr[x].price}>)`);
}

// 6
function maxPriceProduct(arr) {
  let maxPrice = 0;
  let newObjWithMaxPrice = null;

  for (let obj of arr) {
      if (obj.price > maxPrice) {
          maxPrice = obj.price;
          newObjWithMaxPrice = obj;
    }
  }

  return newObjWithMaxPrice;
}
console.log(maxPriceProduct(arr))