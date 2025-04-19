// Виды функции 

// Объявленная функция (function declaration)
function sumNums(a,b){
    return a + b;
}
console.log(sumNums(5,6));
console.log(sumNums(2,76));

// Функицональное выражение (function expression)
const c = function(a, b){
    return a + b;
}
console.log(sumNums(22,78));

// Стрелочная функция (arrow function)
// если много задач в теле, то синтаксис такой:
const d = ((a,b) => {
    a *= 2;
    b *= 2;
    return a + b;
})
console.log(d(3, 5));

/*если в теле только одна задача можно сократить так */
const f = (a,b) => a + b; 
console.log(f(3, 5));

// если параметр один, то скобки не нужны:
const e = a => a ** 3;
console.log(e(3));


// Методы перебора массивов - ForEach и Map

const names = ['Anna', 'Oleg', 'Tom'];
const newNames = [];
// Метод ForEach
names.forEach(function(element, index){
    console.log(`Элемент ${element} имеет индекс ${index}`);    
    newNames.push(element + ' good job!')
})

names.forEach(element => newNames.push(element + '!')); /*сокращенный */
console.log(newNames);

// Метод MAP (возвращает новый массив, без изначального объявления)
const newArray = names.map(function(item){
    return item + ' map';
})
console.log(newArray);

const namesLength = names.map(item => item.length); /*сокращенный */
console.log(namesLength);


