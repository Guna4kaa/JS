// ------1.
/*Перепишите код с использованием тернарного оператора

let country = 'Sweden';
let access;
if (country == 'Sweden') {
access = true;
} else{
access = false;
} */

/*let country = 'Sweden';
let access = country == 'Sweden' ? true: false;
console.log(access); */


// -------2.
/*Создать переменную и записать в нее число, например 10. 10 раз увеличить 
значение этой переменной на 1. Итоговый результат вывести в консоль. */

/*let a = 10;
for(let i = 0; i < 10; i++){
    a++;
}
console.log(a); */

// -----3.
/*Увеличивая счетчик цикла на 2, нужно 5 раз выполнить след. действия:
- запросить у пользователя ввод числа
- проверить, равно ли это число 10. Если равно, вывести в консоль "Равно 10". 
Иначе вывести "Не равно 10".
В итоге должно получиться 5 запросов и 5 результатов в консоли. */


/*for(let i = 0; i < 10; i += 2){
    let num = +prompt('Введите число');
    if(num === 10){
        console.log('Равно 10');
    } else{
        console.log('Не равно 10');
    }
}; */


// --------4.
/*Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. 
вывести числа 0, 1, 4, 9, 16...
** Задавать количество чисел, которые нужно вывести, при помощи функции prompt. */

/*let num = +prompt('Введите число');
if(num > 100) num = 100;

for(i = 0; i < num; i++){
    console.log(i ** 2);
}*/


// --------5.
/*Напишите программу, которая выводит в консоль числа от 1 до 100.
При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», 
а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то 
программа должна выводить слово «FizzBuzz» */

/*for(let i = 0; i < 100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log('FizzBuzz');        
    }else if(i % 5 === 0){
        console.log('Buzz');        
    }else if(i % 3 === 0){
        console.log('Fizz');        
    }else{
        console.log(i);
    }
}; */


// ----------6.
/*Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
} */

/*let i = 0;
while(i < 3){
    alert(`number ${i}!`);
    i++;
}; */


// ---------7
/*Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит 
квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как 
аргументы - min и max). */

/*function perfectSquare(min, max) {
      for(let i = min; i <= max; i++) {
       console.log(`Квадрат числа - ` + i + " равно: ", i**2);
     }
   }
   const min = parseInt(prompt("Введите начальное значение (min):"));
   const max = parseInt(prompt("Введите конечное значение (max):"));
   perfectSquare(min, max); */


//    -----8
/* Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. 
Это будет строка вида "rgb(10,55,250)"

Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция 
получения случайного числа в диапазоне min - max. Вот эта функция 
(просто скопируйте, она уже готова):

function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
Подсказки: 
- Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
- Одна функция может вызывать другую функцию*/

/*function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
console.log(getRandomInteger(0, 255));

function getRandomRGB (a, b, c){
    return `rgb(${a}, ${b}, ${c})`
}
let color = getRandomRGB(getRandomInteger(0, 255), getRandomInteger(0, 255), getRandomInteger(0, 255))
console.log(color); */


// -------------9.
/*Написать функцию, которая принимает целое число n.   
Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла 
выводить в консоль текущее число (i) и информацию о том, целое ли оно.
Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.

Пример, при запуске функции с параметром 3:

"1 integer"
"1.5 decimal"
"2 integer"
"2.5 decimal" */

/*function checkIntNum (n){
    for(i = 1; i < n; i += 0.5){
        i % 1 === 0 ? console.log(`${i} integer`) : console.log(`${i} decimal`);
        }
}
checkIntNum(3); */

// -------------10.
/*Написать функцию calcPrice, которая рассчитывает и выводит в консоль стоимость 
аренды авто на кол-во дней, которое приходит в функцию как параметр.
День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую 
итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка 
составит $20. */

/*const price = 40;
function calcPrice (day){
    let sum = day * price;
    if(day >= 7){
        sum -= 50
    }else if(day >= 3){
        sum -= 20
    }else{
        sum;        
    }
    return sum
}
console.log(calcPrice(7));
console.log(calcPrice(3));
console.log(calcPrice(2)); */
