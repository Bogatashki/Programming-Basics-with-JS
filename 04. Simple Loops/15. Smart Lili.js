function lili (value){
    let n = Number(value[0]); 
    let moneyGift = [];
    let Wash = Number(value[1]);
    let toyGift = [];
    let money = 0;
    let j = 0;
    for (let i = 1; i <= n; i++){
        j++;
        if((i % 2) == 1){
            toyGift.push(i);
        }else{
            moneyGift.push(i);
            j--;
            money = money + 10 * j;
        }
    }
    let priceToy = Number(value[2]) * toyGift.length;
    let brotherLili = moneyGift.length * 1;
    let liliMoney = priceToy + money - brotherLili;
    let deff = Math.max(liliMoney, Wash) - Math.min(liliMoney, Wash);
    if (liliMoney >= Wash){
        console.log(`Yes! ${deff.toFixed(2)}`)
    }else{
        console.log(`No! ${deff.toFixed(2)}`)
    }
}
