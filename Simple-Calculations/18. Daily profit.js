function profit ([workMonth, profit, course]){
    let salary = workMonth * profit;
    let yearIncome = salary * 12 + salary * 2.5;
    let tax = yearIncome * 0.25;
    let netIncome = yearIncome - tax;
    let bgn = netIncome * course;
    let monyday = bgn / 365;
    console.log(monyday.toFixed(2));
}
