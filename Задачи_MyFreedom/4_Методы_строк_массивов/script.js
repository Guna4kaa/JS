// ----------------1
/*Написать функцию, которая принимает два параметра и складывает их.
Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, 
должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено 
два параметра.

Примеры результатов вызова функции:
sum(2,4); // 6
sum('d',4); // введенные данные не являются числами
sum(1, [2]); // введенные данные не являются числами
sum(1); // введите два параметра
sum(); // введите два параметра */

/*const sumNums = (a, b) => {
    
    if(a === undefined || b === undefined){
        console.log('введите два параметра');    
        return;    
    };

    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('введенные данные не являются числами');   
        return;     
    };
    
        console.log(a + b);  
        return a + b;          
};
sumNums(2,4);
sumNums('d',4)
sumNums(1,[2])
sumNums(1);
sumNums();
sumNums('sd','ad')*/

// ---------------2
/*Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась 
консольная ошибка (console.error):"Функция "square" не может быть вызвана без аргумента".

function square(a) {
  console.log(a * a)
}
square(10) // 100
square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента */

/*function square(a) {
    if (a === undefined){ 
    throw new Error('Функция "square" не может быть вызвана без аргумента'); 
    };
    console.log(a * a);
        
  }
  square(10) // 100
  square() */

//   ----------3
/*Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, 
что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает 
с заданным числом.
Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,
 а выпало число ...”
Функция создания случайного числа уже была ранее в материалах, в задаче по созданию 
случайного цвета. Написать функцию в стрелочном синтаксисе. */

// Если загаданное число всегда будет 7, то используем этот код
/*const findNum = (min, max) => {
    const a = 7;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    randomNum === a 
    ? console.log('Вы выиграли') 
    : console.log(`Вы не угадали, ваше число - ${randomNum}, а выпало число ${a}`);
    
}
findNum(1,10); */

// если загаданное число в процессе будет меняться, то этот код используем
/*const guessNumber = (userNumber) => {
    if (userNumber < 1 || userNumber > 10) {
        return "Ошибка: число должно быть от 1 до 10";
    }
    
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    return userNumber === randomNumber
        ? "Вы выиграли"
        : `Вы не угадали, ваше число - ${userNumber}, а выпало число - ${randomNumber}`;
};

// Пример вызова
console.log(guessNumber(5)); */

// ---------4
/*Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. 
Используйте подходящий метод массива - forEach или map. */

/*const arr = ['apple', 'banana', 'pear'];
const copyArr = arr => arr.map(item => item);
const copiedArr = copyArr(arr);
console.log(arr);
console.log(copiedArr); */

// ------------5
/*Напишите функцию, которая принимает массив имен и возвращает новый массив, 
в котором каждое имя будет иметь приставку "Hello, " */

/*function greetNames(names){
  return names.map(name => `Hello, ${name}`);
  }
console.log(greetNames(['Anna', 'Oleg', 'Petr'])); */

// --------------6
/*Напишите функцию, которая принимает массив объектов пользователей и возвращает 
новый массив, содержащий только их имена. */

/*function users(items) {
  return items.map(item => item.name);
}
const newUsers = users([
  {name: "Jane", age: 18, height: 170}, 
  {name: "Alex", age: 19, height: 170}, 
  {name: "Oleg", age: 17, height: 170}
]);

console.log(newUsers); */


// -----------------7
/*Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, 
которые являются числами. Сумму чисел необходимо вернуть из функции.

Проверить работу функции можно на объекте:} */

/*function sumObjectValues(items){
  let sum = 0;

  for (let key in items) {    
    if(typeof items[key] === 'number')
    sum += items[key]
  }
  
  return sum;
}
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}
console.log(sumObjectValues(objectWithNumbers)); */



// ----------------8
/*Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
Вам понадобятся методы строк. */

/*function ucFirst(str){
  if(!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('hello'));
console.log(ucFirst('gulnar'));
console.log(ucFirst('')); */



// ----------9
/*Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' 
или 'XXX', а иначе false. Функция должна быть нечувствительна к регистру. */

/*function checkSpam(str){
  str = str.toLowerCase();
  return str.includes('badword') || str.includes('xxx'); 
  
}

console.log(checkSpam('XXX'));
console.log(checkSpam('badWord')); */


// -----------------10
/*Написать функцию, которой на вход подается строка, на выход она дает символы 
наоборот (разворачивает строку). Пример: «привет, Женя» -> «янеЖ ,тевирп».
Обратите внимание: метод reverse существует только у массивов. */

/*function reverseArray(string){
  return string.split('').reverse().join('');  
}
console.log(reverseArray('hello, Oleg')); */


// -------------11
/*let stations = [
  'MAN675847583748sjt567654;Manchester Piccadilly',
  'GNF576746573fhdg4737dh4;Greenfield',
  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
  'SYB4f65hf75f736463;Stalybridge',
  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
  ];

let stationsCod = stations.map(item => item.slice(0, 3));
let stationsNames = stations.map(item => {
  let findIndexOfSymbol = item.indexOf(';');
  return item.slice(findIndexOfSymbol + 1)
});

let result = stationsCod.map((code, index) => `${code}: ${stationsNames[index]}`)
console.log(result); */


// -----------------12
/*Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, 
содержащий только уникальные элементы arr. */

/*let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
let uniqueItem = [];

strings.forEach(item => {
  if(!uniqueItem.includes(item)){
    uniqueItem.push(item)
  }
});
console.log(uniqueItem); */


// --------------13
// const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
// const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

// const catsJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
// const catsJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];


/*function verifyCats(catsJane, catsJulia){
  const correctedJane = catsJane.slice(1, - 1);
  const totalCats = correctedJane.concat(catsJulia);
  totalCats.forEach((age, index) => {
    if(age >= 2){
      console.log(`Кошка №${index + 1} взрослая, ей ${age} лет`);
    } else{
      console.log(`Кошка №${index + 1} еще котенок`);
    }
  }
)}
console.log('Тест 1:');
verifyCats(
  [4, 5, 3, 11, 6, 2, 4, 1, 5, 9],
  [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
);

console.log('\nТест 2:');
verifyCats(
  [3, 5, 9, 14, 1, 2, 6, 8, 3, 10],
  [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]
); */




// -----------------------14
/*Решить 4 задание из прошлой темы, используя метод filter

Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, 
но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
Например, запуск функции filterFor(arr, 5) дает результат [5,8]
запуск функции filterFor(arr, 10) дает результат []
запуск функции filterFor(arr, 3.11) дает результат [4,5,8] */

/*let arr = [5, 4, 3, 8, 0];

function filterFor(arr, a){
  const newArr = arr.filter(item => item >= a)
  return newArr
}
console.log(filterFor(arr, 5));
console.log(filterFor(arr, 10));
console.log(filterFor(arr, 3.11)); */



// ----------------15
/*Описать функцию, которая принимает массив строк и возвращает массив, содержащий 
только строки более 3-х символов. Проверить работу функции на примере:  
['yes', 'hello', 'no', 'easycode', 'what']. */

/*function filterLongWords(words){
  const longWords = words.filter(word => word.length > 3)
  return longWords
}
console.log(filterLongWords(['yes', 'hello', 'no', 'easycode', 'what'])); */


// -------------------16
/*Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы 
(размер массива определяется его длиной): 
[ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры 
которой a и b - это элементы массива. В данной задаче элементы массива, 
то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов. */

/*const arr = [ [14, 45], [1], ['a', 'c', 'd'] ] ;
const sortedArr = arr.sort((a, b) => a.length - b.length);
console.log(sortedArr); */


// -------------------17
/*Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) 
и выполняет следующие действия по порядку:

1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, 
человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, 
человеческий возраст = возраст кошки * 7. (сделать через map)
2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)
3. Возвращает средний человеческий возраст для всех взрослых кошек. 
(сумму для среднего посчитать через reduce)
Вызовите функцию для обоих наборов тестовых данных.
Тестовые данные:
1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

В задании необходимо использовать методы массивов: map, filter, reduce */

/*function getAverageHumanAge(catAges){
  const humanAges = catAges.map(age => (age <= 2 ? age * 10 : age * 7));
    const adults = humanAges.filter(age => age >= 18);
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    return average;
  }

console.log(getAverageHumanAge([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]));
console.log(getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2])); */









// ------------Задание от ChatGPT
/*У тебя есть массив объектов с данными о студентах. Нужно использовать forEach, чтобы:
Вывести в консоль каждого студента в формате "Имя: [имя], Возраст: [возраст]".
Посчитать общее количество студентов старше 18 лет и вывести это число. */

/*const students = [
    { name: "Алиса", age: 17 },
    { name: "Борис", age: 20 },
    { name: "Виктор", age: 22 },
    { name: "Диана", age: 16 },
    { name: "Егор", age: 19 }
  ];
  
  students.forEach(student => {
    console.log('Имя: ' + student.name + ', Возраст: ' + student.age);
  });

  students.forEach(student => {
   if(student.age > 18){
    console.log(student.name);    
  }
}); */

// ------------Задание от ChatGPT
/*У тебя есть массив товаров с ценами. Нужно:
Вывести в консоль каждый товар в формате:
"Товар: [название], Цена: [цена]".
Посчитать и вывести общую сумму всех товаров. */

/*const products = [
  { name: "Ноутбук", price: 50000 },
  { name: "Смартфон", price: 30000 },
  { name: "Планшет", price: 20000 },
  { name: "Наушники", price: 5000 },
];

let totalSum = 0;
products.forEach((product, index, mass) => {
  console.log(`Товар: ${product.name}, Цена: ${product.price}`);
  totalSum += product.price;
});
console.log(`Общая сумма продуктов: ${totalSum} тенге`); */

// ------------Задание от ChatGPT
/*У тебя есть массив заказов (orders). Нужно:
Вывести в консоль информацию о каждом заказе в формате:
"Покупатель: [имя], Товар: [товар], Количество: [кол-во], Цена за штуку: [цена]".
Посчитать и вывести итоговую сумму всех заказов (учитывая количество каждого товара). */

/*let sum = 0;
const orders = [
  { customer: "Алексей", product: "Телевизор", quantity: 1, price: 40000 },
  { customer: "Марина", product: "Микроволновка", quantity: 2, price: 8000 },
  { customer: "Сергей", product: "Холодильник", quantity: 1, price: 50000 },
  { customer: "Ирина", product: "Чайник", quantity: 3, price: 3000 },
];
orders.forEach((order) => {
  console.log(
    `Покупатель: ${order.customer}, Товар: ${order.product}, Количество: ${order.quantity}, Цена за штуку: ${order.price}`
  );
  sum += (order.quantity * order.price);
  console.log('------------------------');
});
console.log(`Итоговая сумма всех заказов составляет ${sum} тенге`); */

// ------------Задание от ChatGPT
/*У тебя есть массив сотрудников с зарплатами. Нужно:
Вывести каждого сотрудника в формате:
"Сотрудник: [имя], Должность: [должность], Зарплата: [зарплата]".
Найти среднюю зарплату всех сотрудников и вывести её. */

/*const employees = [
    { name: "Анна", position: "Разработчик", salary: 350000 },
    { name: "Дмитрий", position: "Дизайнер", salary: 280000 },
    { name: "Екатерина", position: "Менеджер", salary: 310000 },
    { name: "Иван", position: "Тестировщик", salary: 270000 },
  ];
let totalSalary = 0;
employees.forEach((item, index, mass) => {
    console.log(`Сотрудник: ${item.name}, Должность: ${item.position}, Зарплата: ${item.salary}`);
    totalSalary += item.salary;    
})
console.log(`Общая зарплата всех сотрудников: ${totalSalary} тенге`);

let middleSalary = totalSalary /  employees.length
console.log(`Средняя зарплата всех сотрудников равна: ${middleSalary} тенге`); */

// ------------Задание от ChatGPT
/*Напиши функцию, которая принимает массив строк и возвращает новый массив, 
где к каждому элементу добавляется !. */

/*function addExclamation(items){
  return items.map (item => `${item}!`);
}
console.log(addExclamation(["Hi", "Bye", "Wow"])); */

// ------------Задание от ChatGPT
/*Создай функцию, которая принимает массив имен и делает их заглавными. */

/*function toUpperCaseNames(items){
  return items.map(item => item.toUpperCase());
}
console.log(toUpperCaseNames(["alice", "bob", "charlie"])); */

// ------------Задание от ChatGPT
/*Функция принимает массив строк и возвращает массив их длин. */
/*function getLengths(items){
  return items.map(item => item.length)
}
console.log(getLengths(["apple", "banana", "kiwi"])); */

// ------------Задание от ChatGPT
/*Функция должна вернуть только те имена, которые короче 5 символов. */
/*function filterShortNames(items){
  return items.filter(item => item.length < 5)
   
}
console.log(filterShortNames(["Sam", "Jonathan", "Ann"])); */

// ------------Задание от ChatGPT
/*Функция должна объединить массив строк в одну строку через запятую. */
/*function joinStrings (items){
 return items.join(",")
}

console.log(joinStrings(["Hello", "world", "JS"])); */
