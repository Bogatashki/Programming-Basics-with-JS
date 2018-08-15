function Shopping ([arg1, arg2, arg3]) {
    let budget = Number(arg1);
    let chocolate = Number(arg2);
    let milk = Number(arg3);
    let chocolateMoney = chocolate * 0.65;
    let milkMoney = milk * 2.70;
    let mandarin = chocolate - (chocolate * 0.35);
    let mandarinMoney = Math.floor(mandarin) * 0.20;
    let total = chocolateMoney + milkMoney + mandarinMoney;
    if (total <= budget){
        let balance = budget - total;
        console.log(`You got this, ${balance.toFixed(2)} money left!`)
    }else{
        let balance = total - budget;
        console.log(`Not enough money, you need ${balance.toFixed(2)} more!`)
    }
}
