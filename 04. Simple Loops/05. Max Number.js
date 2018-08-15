function MaxNumber (arg){
    let n = Number(arg[0]);
    let max = Number.NEGATIVE_INFINITY;
    for (i = 1; i <= n; i++){
        let num = Number(arg[i]);
        if (num > max){
            max = num;
        }
    }
    console.log(max);
}
