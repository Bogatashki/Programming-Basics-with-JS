function SumNumbers(arg){
    let n = Number(arg[0]);
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum = sum + Number(arg[i]);
    }
    console.log(sum);
}
