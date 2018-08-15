function Sequence2k1 ([arg]){
    let n = Number(arg);
    let num = 1;
    for(let i = 0; i <= n && num <= n; i++){
        console.log(num);
        num = num * 2 +1;
    }
}
