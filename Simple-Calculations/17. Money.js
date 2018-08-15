function money ([bitcoinIn, yuanIn, commission]){
    let bitcoinBGN = bitcoinIn * 1168;
    let yuanDolar = yuanIn * 0.15;
    let dolarBGN = yuanDolar * 1.76;
    let euro = (bitcoinBGN + dolarBGN) / 1.95;
    let commissionEuro = euro * commission * 0.01;
    let euro1 = euro - commissionEuro;
    console.log(euro1.toFixed(2));
 }
money ([1, 5, 5])
