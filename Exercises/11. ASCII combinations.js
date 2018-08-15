function simbolCombinations (arg){
    let num = arg[0];
    let numbers = "";
    let numbersSum = 0;
    let uppercase = "";
    let uppercaseSum = 0;
    let letter = "";
    let letterSum = 0;
    let allSimbol = "";
    let allSimbolSum = 0;
    for (let i = 1; i <= num; i++){
        let simbolString = String(arg[i]);
        let simbol = simbolString.charCodeAt(0);
        if (simbol > 47 && simbol < 58){
            numbersSum += simbol;
            numbers += simbolString;
        }else if(simbol > 64 && simbol < 91){
            uppercase += simbolString;
            uppercaseSum += simbol;
        }else if(simbol > 96 && simbol < 123){
            letter += simbolString;
            letterSum += simbol;
        }else{
            allSimbol += simbolString;
            allSimbolSum += simbol;
        }
    }
    let maxSum = Math.max(numbersSum, uppercaseSum, letterSum, allSimbolSum);
   console.log(`Biggest ASCII sum is:${maxSum}`);
    if (maxSum == numbersSum){
        console.log(`Combination of characters is:${numbers}`);
    }else if (maxSum == uppercaseSum){
        console.log(`Combination of characters is:${uppercase}`);   
    }else if (maxSum == letterSum){
        console.log(`Combination of characters is:${letter}`);   
    }else {
        console.log(`Combination of characters is:${allSimbol}`);
    }
}
