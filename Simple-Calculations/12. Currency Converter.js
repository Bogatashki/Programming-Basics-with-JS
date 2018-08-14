function USDtoBGN ([num, currencyIn, currencyOut]){
    num = Number(num);
    let usd = 1.79549;
    let eur = 1.95583;
    let gbp = 2.53405;
    let resultBGN = num; 
    if (currencyIn == "USD"){
        resultBGN = usd * num;
    }else if (currencyIn == "EUR"){
        resultBGN = eur * num;
    }else if (currencyIn == "GBP"){
        resultBGN = gbp * num;
    }
    let resultInAut = resultBGN;
    if (currencyOut == "USD"){
        resultInAut = resultBGN / usd;
    }else if (currencyOut == "EUR"){
        resultInAut = resultBGN / eur;
    }else if (currencyOut == "GBP"){
        resultInAut = resultBGN / gbp;
    }
    console.log(resultInAut.toFixed(2));
}
USDtoBGN ([20, "USD", "BGN"])
