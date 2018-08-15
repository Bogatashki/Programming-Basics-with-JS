function USDtoBGN ([num]){
    num = Number(num);
    let usd = 1.79549;
    resultBGN = usd * num;
    console.log(resultBGN.toFixed(2)+ " BGN");
}
USDtoBGN ([20, "USD", "BGN"])
