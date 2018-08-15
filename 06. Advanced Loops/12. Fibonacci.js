function Fibonacci (arg){
    let num = Number(arg);
    let f1 = 1;
    let f2 = 1;
    let i = 1;
    while (i < num) {
        let oldF2 = f2;
        f2 = f1 + f2;
        f1 = oldF2;
        i++;

    }
    console.log(f2)
}
