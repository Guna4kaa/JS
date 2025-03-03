let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    dataTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a = prompt("Введите обязательную статью расходов в этом месяце");
b = prompt("Во сколько обойдется?");
appData.expenses[a] = b;

// let moneyPerDay = alert("Ежедневный бюджет: " + appData.budget / 30);

let moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + moneyPerDay)

console.log(moneyPerDay);
console.log(appData);

