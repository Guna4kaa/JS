// 1. Callback функции
function first(){
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}
first();
second();

function learnJS(lang, Callback){
    console.log("Я учу " + lang);
    Callback();
    
}

learnJS("Java Script", first);

function learnJava(language, Callback){
    console.log("Я учу " + language);
    Callback();
    
}
learnJava("Java", function(){
    console.log("Я прошел курс");
});

// 2. Objects
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};
console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};
delete options.bool;
console.log(options);

for  (let key in options){
    console.log("Свойсто " + key + " имеет значение " + options[key]);
    
}
console.log(Object.keys(options).length);

// 3. Массивы и псевдомассивы
let arr = ["first", 2, 3, "four", 5];
// arr.pop();
// arr.push('5')
// arr.shift();
// arr.unshift("1");

// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass){
    console.log(i + ": " + item + (" массив: " + mass + ")"));
})

console.log(arr);

let mass = [1,3,5,9,7];
// forIn - переберет массив по ключу (индексу)
for(let key in mass){
    console.log(key);
};
// forOf - переберет массив по значению
for(let key of mass){
    console.log(key);
}

// 4. Метод "split" - разделяет строки, введенные через какой-то знак (запятая)
// на массивы.
let ans = prompt("", ""),
    arrr = [];
arrr = ans.split(',');
console.log(arrr);

// 5. Метод "Join" - объединит массивы в строки
let array = ['fd', 'sfsf', 'grgwe', 'gfwef'],
    i = array.join(', ');
    console.log(i);
    
// 6. Метод "Sort" - сортирует массив по алфавиту
let arr1 = ['fd', 'sfsf', 'grgwe', 'gfwef'],
    i1 = arr1.sort();
    console.log(arr1);

let arr2 = [1, 15, 4],
    i2 = arr2.sort(compareNum);

function compareNum(a, b){
    return a-b;
}
console.log(arr2);
