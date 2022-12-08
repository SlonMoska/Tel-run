'use strict'

// console.log('hellow world');
// // Находим кнопку для прослушки клика
// const btnClick = document.querySelector('.click-button');
//  // Создаем функцию 
// const handleBtnClick =() => {
//   console.log('I was clicked')
// }
// // Начинаем слушать событие клика по кнопке
// btnClick.addEventListener("click", handleBtnClick);
// // Создаем искуственную задержку в выполнении кода
// setTimeout(() => {
// // Перестаем слушать это событие
//    btnClick.removeEventListener("click", handleBtnClick);
// }, 5000);


// // Обьявили переменную
// let counter = 0;
// // Нашли наши кнопки в документе
// const btnPlus = document.querySelector('.btn--plus');
// const btnminus = document.querySelector('.btn--minus');
// // Написали функцию увеличения на 1
// function plusOne () {
//   counter = counter + 1;
//   console.log(counter);
// }
// // Написали функцию уменьшения на 1
// function minusOne () {
//   counter = counter - 1;
//   console.log(counter);
// }
// // Повесили прослушку на найденные кнопки и задали необходимую функцию
// btnPlus.addEventListener("click", plusOne);
// btnminus.addEventListener("click", minusOne);


// // Задача: прослушать собитие нажатия клавиатуры и вывести в параграф на странице

// // Находим нужный параграф
// const prg = document.getElementById("keyboard-text");

// // Слушаем нажатие кнопки на клавиатуре целиком у всего документа
// // и выводим это значение в параграф, склеивая с предыдущим
// document.addEventListener("keydown", (event) => {
//   prg.innerText = prg.innerText + event.key;
// });

// const article = document.querySelector('.article');
// setTimeout(() => {
//   article.classList.add ('red');
//   article.classList.remove ('green');
// }, 2000);


//Задача найти карточки на страницею Для каждой присвоить класс green?
// если этого класса у нее нетю Если класс уже есть, убрать его

//Находим все карточки с указанным классом - querySelectorAll вернет нам массив
const cards = document.querySelectorAll('.article-with-number');
//перебираем каждий элемент массива и вешаем на него  прослушку события клин
cards.forEach(card => card.addEventListener('click', () => {
  if (card.classList.contains('green')) {
    card.classList.remove('green');
  } else {
    card.classList.add ('green');
  }
}))

//Пример использования стойства - style - добавляет  элементам inline style
const prgStyled = document.querySelector('#prg--styled');
prgStyled.style.color = "green";
prgStyled.style.fontSize = "32px"; // для написания правила, состоящего из 2 слоем и более
// используем camelCase

function createCard(value) {
  // Создали элемент  div
  const newDiv = document.createElement("div");
  // стилизовали при помощи  style
  newDiv.style.width= "100px";
  newDiv.style.height="100px";
  newDiv.style.border = "1px solid black";
  //добавили фоновий цвет с динамике используя аргумаетн  value  как значение
  newDiv.style.backgroundColor = `rgb(128, 128, ${value})`;
  //
  const title = document.querySelector('.cardfor');
  const parent = title.parentNode;
  parent.insertBefore(newDiv, title);
  
}
let i = 0;
while (i <= 255) {
  createCard(i);
  i +=  5;
}