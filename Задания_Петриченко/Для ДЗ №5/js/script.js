let menu = document.querySelector('.menu');
let menuItems = document.getElementsByTagName('li');
let img = document.querySelector('.body');
let titleName = document.querySelector('.title');
let adv = document.querySelector('.adv');
let attitude = document.querySelector('.prompt');

// добавление 5го пункта
let newLi = document.createElement('li');
let nameNewLi = document.createTextNode('Пятый пункт');
newLi.classList.toggle('menu-item');
newLi.innerHTML = "Пятый пункт";
menu.appendChild(newLi);

// упорядочивание меню
menu.insertBefore(menuItems[2], menuItems[1]);

// меняем задний фон на другую картинку
document.body.style.background = "url('img/apple_true.jpg')";

//Поменять заголовок, добавить слово "подлинную" (метод заменяет одно на другое)
titleName.textContent = 'Мы продаем только подлинную технику Apple';

//Удалить рекламу со страницы
adv.remove(adv);

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let answer = prompt('Ваше отношение к технике apple?');
attitude.innerHTML = answer;
console.log(answer);