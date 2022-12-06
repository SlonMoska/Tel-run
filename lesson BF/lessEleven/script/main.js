// 'use strict';

// console.log('Hello, World');

// // 1. Создание элемента Div 
// // 2. Добавление разметки в созданный элемент
// // 3. созданного элемента в конце в конец выбранного узла (document.bod)

// const div = document.createElement("div");
// div.innerHTML="<strong>Hello world!</strong>This is created div";
// document.body.append(div);

// // 1. Создание элемента span 
// // 2. Добавление разметки в созданный элемент
// // 3. созданного элемента в конце в конец выбранного узла (document.bod)

// const span = document.createElement("span");
// span.innerHTML="I am a span!";
// document.body.prepend(span);

// // Добавление строки до элемента (узла)
// // 1.Вибрали наш список на странице с помощью getElementById
// // 2.Добавили строку перед выбранным списком

// const ol = document.getElementById('ol');
// ol.before("Строка до списка");

// // 1.Добавили строку после выбранным списком

// ol.after("Строка после списка")

// //Находим элемент (Div) на странице

// const elementToDelete = document.querySelector('.text-block--to-delete');
// console.log(elementToDelete);

// // Удаляем элемент при помощи метода remove

// elementToDelete.remove();
// console.log(elementToDelete)

// // Обьявление функции на удаление элементов списка

// function clearList(items){
//   // Находим все элементы, соответствующие условия (items), на странице
//   const elements = document.querySelectorAll(items);
//   // Проверили найденные элементы в консоли
//   console.log(elements);
//   // Перебираем получиний массив
//   for (let item of elements) {
//     // К каждому элементу применяем метод remove
//     item.remove();
//   }
// }

// clearList('li')

// Задача: получить ввод данных(список покупок) от пользователя 
// и добавить их в маркированный список
// в виде элементов
// Решение:

// Создаем список
const ul = document.createElement('ul');
// Добавляем список в элемент body
document.body.append(ul);
// Входим в бесконечный цикл
while(true) {
    // Вводим данные (строка для элемента списка)
    let listItemContent = prompt("Введите, что вы хотите купить в магазине", "");
    // обратываем условие выхода из цикла - если пользователь ввел пустую строку,
    // цикл завершается
    if(!listItemContent) {
        break;
    }
    // создаем элемент списка (тег li)
    let li = document.createElement('li');
    // добавили введную строку в созданный элемент
    li.innerHTML = listItemContent;
    // добавили созданный элемент в конец списка
    ul.append(li);
}
