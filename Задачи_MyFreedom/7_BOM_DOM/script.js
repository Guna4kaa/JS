console.log("User-Agent:", navigator.userAgent);
console.log("Язык браузера:", navigator.language);
console.log("Онлайн?", navigator.onLine);
console.log("Платформа:", navigator.platform);
console.log("Браузер — движок:", navigator.appVersion);

// --------------1

// Получаем нужные объекты BOM
const os = navigator.platform;
const browser = navigator.userAgent;
const url = location.href;

// Собираем строку
const message = `На компьютере с ОС ${os} с помощью браузера ${browser} я открыл страничку ${url}`;

// Выводим в консоль
console.log(message);

// ---------------------2
/*В файле html есть разметка (добавьте ее в свой файл html):
2.1. Вывести в консоль каждое из имен (содержимое каждого li).
2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.) */

const listLi = document.querySelectorAll('#list li');
listLi.forEach(element => {
    console.log(element.textContent);    
});

for(i = 0; i < listLi.length; i++){
    listLi[i].textContent = i;
};

// ----------------------3
/*Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, 
который найдет в HTML все элементы с классом "forRemove" и удалит их. */

const forRemove = document.querySelectorAll('.forRemove');
forRemove.forEach(el => el.remove());

// --------------------Задание 4

/*Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: 
размер 36px, жирный шрифт. Добавить абзац с текстом на страницу. */

const paragraph = document.createElement('p');
paragraph.innerText = 'lorem';
paragraph.style.fontSize = '36px';
paragraph.style.fontWeight = 'bold';
document.body.append(paragraph);
console.log(paragraph);

// ----------------------Задание 5
/*Написать функцию, которая принимает на вход 3 параметра: название тега, 
название цвета, содержимое. Функция должна сформировать необходимый тег, 
добавить необходимый стиль с цветом и внести содержимое. Вывести несколько 
таких сгенерированных тегов в консоль, затем отправить их на страницу.
 */

function newTag (tagName, color, content){
    const tag = document.createElement(tagName);
    tag.innerText = content;
    tag.style.color = color;
    document.body.append(tag);
    return tag;
};
const tags = [
    newTag('p', 'red', 'Lorem'),
    newTag('h1', 'blue', 'Заголовок небесного цвета'),
    newTag('span', 'green', 'Зелёный спан')
];
console.log(tags);

// ---------------------Задание 6
/*Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) 
добавить в этот select опции (option) под годы от 1960 по 2020 */

const years = document.createElement('select');
document.body.append(years);

for(i = 1960; i <= 2020; i++){
    const newOpt = new Option(i, i);
    years.appendChild(newOpt);
};

// -----------------------Задание 7

/* Вставить в страницу (в html документ) ul.
Предусмотреть в коде следующий массив:
const clients = [
{name: "Женя", order: true},
{name: "Кристина", order: true},
{name: "Павел", order: false},
{name: "Виолетта", order: false},
{name: "Костя", order: true}
]
Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
- Клиент Женя оплатил заказ
- Клиент Павел отменил заказ
... остальные li с контентом
Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта 
(а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: 
если true – то оплатил, если false – то отменил */

const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
    ];

const ulName = document.createElement('ul');
ulName.id = 'listNames';
document.body.append(ulName);

clients.forEach(item => {
    const li = document.createElement('li');
    const status = item.order ? 'оплатил(а)' : 'отменил(а)';
    li.textContent = 'Клиент ' + item.name + ' ' + status + ' ' + 'заказ.'
    ulName.appendChild(li);
})

// --------------------Задание 8

/* Есть массив ссылок:

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 
'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

Вам нужно:
1) при помощи JS создать DIV, задать ему css стили (фон, паддинги);
2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов 
массива сформировать ссылку (тег c атрибутом href и текстом из массива) и 
добавить эту ссылку в созданный DIV из пункта 1. При нажатии на ссылки адреса 
должны открываться в новой вкладке (атрибут target="_blank").
3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY */

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 
    'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

const div = document.createElement('div');
div.style.background = 'green';
div.style.padding = ('30px 0px');
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.gap = '10px'; // отступ между ссылками

linksArr.forEach(item => {
    const link = document.createElement('a');
    link.href = item;
    link.target = '_blank';
    link.innerText = item;
    link.style.textDecoration = 'none';
    div.appendChild(link);
})
document.body.append(div);

// --------------------Задание 9
/* Есть массив объектов с полями name, age. Например:
const users = [
{name: 'Mark', age: 12},
{name: 'Olga', age: 30},
{name:'Tom', age: 25},
{name:'Den', age: 43}
]
Создать в html таблицу (table).
C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, 
во второй возраст. Имена должны быть красного цвета, age - синего.
ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. 
Строк должно создаваться столько, сколько объектов внутри массива, и их количество 
может быть любым.*/

const users = [
    {name: 'Mark', age: 12},
    {name: 'Olga', age: 30},
    {name:'Tom', age: 25},
    {name:'Den', age: 43},
    {name:'Dena', age: 47}
    ];

const table = document.getElementById('tabl');

users.forEach(user => {
    const row = document.createElement('tr');
    
    const userAgent = document.createElement('td');
    userAgent.textContent = user.name;
    userAgent.style.color = 'red';

    const userAge = document.createElement('td');
    userAge.textContent = user.age;
    userAge.style.color = 'blue';

    row.appendChild(userAgent);
    row.appendChild(userAge);

    table.appendChild(row);
})

// --------------------Задание 10

/* Есть верстка: https://teenscool1.notion.site...
С помощью JavaScript:
1) Найти в коде список ul и добавить ему класс “list”.
2) На li через один (начиная с самого первого) установить класс “item”
3) На все ссылки в примере установить класс “custom-link” */

const listUl = document.querySelector('#listLinks');
listUl.classList.add('listok');
console.log(listUl);

const itemLi = document.querySelectorAll('.listok li');
console.log(itemLi);

itemLi.forEach((li, index) => {
    if(index % 2 === 0){
        li.classList.add('item');
    }; 
});
console.log(itemLi);

const customLink = document.querySelectorAll('li a');
console.log(customLink);

customLink.forEach(item => {
item.classList.add('custom-link');
});
console.log(customLink);
console.log(listUl);