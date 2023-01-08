// 1
let arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};
console.log(arr['ru'][0])
// 2
const obj = {'Коля':'200', 'Вася':'300', 'Петя':'400'};
for(key in obj){
  console.log([key] + ' - Зарплата ' + obj [key]+' долларов');
}
// 3
 let as  = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
 console.log(as["js"][0])
// 4
const array = {
	'ru':['пн', 'вт', 'ср', 'чт', 'пт','сб','вс'],
	'en':['mon', 'tue', 'wed','thu','fri','sat','sun'],
}
console.log(array['ru'][0])
console.log(array['en'][2])
// 5
const days= {
  'ru':['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
  'en':['M','Tu','Wed','Td','Fri','Sat','Sun']
  };
  
  const getDay = (lang, num) => {
    return days[lang][num - 1]
  }
  
  console.log(getDay('en', 6))
// 6
// 7
const arraysum = [2,3,4,5,6,26,22,23,12,9,32,8];
let sum = 0;
for(let i = 0; i < arraysum.length; i++){
  if (arraysum[i] % 2 == 0){
    sum += arraysum[i];
  }
}
let minus = 0;
for(let i = 0; i <  arraysum.length; i++){
  if (arraysum[i] % 2 != 0){
    minus += arraysum[i];
  }
}
console.log('sum no '+ minus, 'sum yes ' + sum)

  if(sum >= minus) {
    console.log(sum); }
  else {
    console.log(minus)
  }



8
  function cToF(celsius) 
{
  let cTemp =prompt ('c');
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
function fToC(fahrenheit) 
{
  let fTemp = prompt('f');
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF();
fToC();