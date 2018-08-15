function EvenPowersOf2 ([arg]){
    let n = Number(arg);
    let num = 1;
    for(let i = 0; i <= n; i+=2){
        console.log(num);
        num = num * 4;
    }
}
