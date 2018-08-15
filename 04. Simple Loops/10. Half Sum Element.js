function HalfSumElement (arg){
    n = Number(arg[0]);
    let max = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++){
        let num = Number(arg[i]);
        if(max < num){
            max = num;
        }
        sum = sum + num;
    }
    let result = Math.max(sum, max) - Math.min(sum, max);
    let diff = Math.max(result, max) - Math.min(result, max);
    if (result == max){
        console.log(`Yes, Sum = ${max}`)
    }else {
        console.log(`No, Diff = ${diff}`)
    }
}
