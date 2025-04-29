let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();


let appData = {
    budget: money,
    dataTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for(let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");
        
            if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50){
            console.log('done');
            appData.expenses[a] = b;
            } else{
            i--
            }
        };
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay)
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log('Минимальный уровень достатка');    
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000){
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = prompt("Под какой процент?");
    
        appData.monthIncome = save/100*12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i++){
            let optionalExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = optionalExpenses;
        }
    },
    chooseIncome: function(){
        let items;
        while (true){
            items = prompt('Что принесет дополнительный доход?', '');
            if(typeof (items) === 'string' && items !== null && items.trim() !== '' 
            && isNaN (items)){
            break;
        } else {
            alert('Ошибка! Введите корректную строку (не пустую и не отменяйте ввод).');
        }        
      }      
        appData.income = items.split(', ');   
        let extraItems;
        while(true){
            extraItems = prompt('А что еще?','');
            if(typeof (extraItems) === 'string' && extraItems !== null 
            && extraItems.trim() !== '' && isNaN (extraItems)){
            appData.income.push(extraItems);
                break;
            }  else{
                alert('Введите корректную строку', '');
            }
        }         
         appData.income.sort();
         appData.income.forEach(function(i, item, arr){
            alert(`${item + 1}: ${i} '(Способы доп.заработка: ${arr})'`);
         })
    }
};

for(let key in appData){
    alert('Наша программа включает в себя данные' + key);
}


// let i = 0;
// while (i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//     
//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
//     && a != '' && b != '' && a.length < 50){
    
//     console.log('done');
//     appData.expenses[a] = b;
//     i++;
//     } else{
//     i--;
//     }
// };

// let i = 0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
    
//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
//     && a != '' && b != '' && a.length < 50){
    
//     console.log('done');
//     appData.expenses[a] = b;
//     } else{
//          i--;
//     }
//          i++;
// } while (i < 2);

