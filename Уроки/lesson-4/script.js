// Классы (Class): Array, Object, String, Number, Math, Date...
 let numbers = new Array();
 let names = new String();
 console.log(numbers, names);
 

// Date, Time
let now = new Date();
console.log(now);

let options = {
    era: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}
console.log(now.toLocaleString());
console.log(now.toLocaleString('ru-RU', options));
console.log(now.toLocaleString('en-GB', options));//время по формату Англии
console.log(now.toLocaleString('en-US'));//время по формату США
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

let minutes = now.getMinutes();
console.log(minutes);


/*Задание 1

Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
Math.round(x)
Math.ceil(x)
Math.floor(x)
В комментариях к каждой строке напишите, как работают эти округления. */

console.log(Math.round(5.4));//округляет по нормальному
console.log(Math.round(5.5));
console.log(Math.round(5.6));
console.log(Math.ceil(5.4));//округляет к большему целому
console.log(Math.ceil(5.5));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.4)); //округляет к меньшему целому
console.log(Math.floor(5.5));
console.log(Math.floor(5.6));


/*Задание 2

Выведите в консоль фразы в 2 строки:
Сегодня 27 октября 2022 (здесь будет ваша дата) - используйте options для вывода месяца 
словом
19 часов 20 минут (здесь будет ваше время) - используйте шаблонную строку, в которую 
подставьте значения с помощью методов getHours() и getMinutes() */

let nowDate = new Date();
let currentDate = nowDate.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
let hour = nowDate.getHours();
let minute = nowDate.getMinutes();
console.log(`Сегодня ${currentDate} ${hour} часов ${minute} минут`);
