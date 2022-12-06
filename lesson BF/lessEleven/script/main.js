'use strict';

console.log('Hello, World');

const div = document.createElement("div");
div.innerHTML="<strong>Hello world!</strong>This is created div";
document.body.append(div);

const div = document.createElement("span");
span.innerHTML="I am a span!";
document.body.prepend(span);

const ol = document.getElementById('ol');
console.log(ol)
ol.before('Строка до списка');
