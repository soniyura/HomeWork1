"use strict";

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt('Введите дату в формате YYYY-MM-DD', "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings:false
};

let question = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howMoney = prompt("Во сколько обойдется?", "");
        appData.expenses[question] =  howMoney;

	question = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howMoney = prompt("Во сколько обойдется?", "");
        appData.expenses[question] =  howMoney;



alert("Ваш бюджет на день: " + appData.budget / 30);

console.log("Информация");