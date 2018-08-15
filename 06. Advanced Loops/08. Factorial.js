function Factorial([arg]) {
    let n = Number(arg);
    let fac = 1;
    do{
        fac = n * fac;
        n--;
    }while (n > 1) {
        console.log(fac);   
    }
}
