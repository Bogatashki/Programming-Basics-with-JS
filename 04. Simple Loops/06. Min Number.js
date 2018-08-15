function minNumber (arg){
    let n = Number(arg[0]);
    let min = Number.POSITIVE_INFINITY;
    for (i = 1; i <= n; i++){
        let num = Number(arg[i]);
        if (num < min){
            min = num;
        }
    }
    console.log(min);
}
