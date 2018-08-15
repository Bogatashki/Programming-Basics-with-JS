function SumDigits([arg]) {
    let n = Number(arg);
    let result = 0;
    do{
        result = result + (n % 10);
        n = Math.floor(n/10)
    }while (n > 0) {
        console.log(result);   
    }
}
