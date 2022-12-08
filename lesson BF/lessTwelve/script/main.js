'use strict'

console.log('hellow world');
// Находим кнопку для прослушки клика
const btnClick = document.querySelector('.click-button');
 // Создаем функцию 
const handleBtnClick =() => {
  console.log('I was clicked')
}
// Начинаем слушать событие клика по кнопке
btnClick.addEventListener("click", handleBtnClick);
// Создаем искуственную задержку в выполнении кода
setTimeout(() => {
// Перестаем слушать это событие
   btnClick.removeEventListener("click", handleBtnClick);
}, 5000);


// Обьявили переменную
let counter = 0;
// Нашли наши кнопки в документе
const btnPlus = document.querySelector('.btn--plus');
const btnminus = document.querySelector('.btn--minus');
// Написали функцию увеличения на 1
function plusOne () {
  counter = counter + 1;
  console.log(counter);
}
// Написали функцию уменьшения на 1
function minusOne () {
  counter = counter - 1;
  console.log(counter);
}
// Повесили прослушку на найденные кнопки и задали необходимую функцию
btnPlus.addEventListener("click", plusOne);
btnminus.addEventListener("click", minusOne);


// Задача: прослушать собитие нажатия клавиатуры и вывести в параграф на странице

// Находим нужный параграф
const prg = document.getElementById("keyboard-text");

// Слушаем нажатие кнопки на клавиатуре целиком у всего документа
// и выводим это значение в параграф, склеивая с предыдущим
document.addEventListener("keydown", (event) => {
  prg.innerText = prg.innerText + event.key;
});