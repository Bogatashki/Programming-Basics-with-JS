function slotMachine ([arg1, arg2, arg3, arg4, arg5, arg6]){
    let n = arg1.charCodeAt(0);
    let n1 = Number(arg2);
    let m = arg3.charCodeAt(0);
    let m1 = Number(arg4);
    let k = arg5.charCodeAt(0);
    let k1 = Number(arg6);
    let simbol1Num = n + n1;
    let simbol2Num = m + m1;
    let simbol3Num = k + k1;
    let simbol1 = String.fromCharCode(simbol1Num);
    let simbol2 = String.fromCharCode(simbol2Num);
    let simbol3 = String.fromCharCode(simbol3Num);
    let consoleCod = simbol1 + simbol2 + simbol3;
    if (simbol1 == "@" && simbol2 == "@" && simbol3 == "@"){
        console.log(consoleCod);
        console.log(`!!! YOU LOSE EVERYTHING !!!`);
    }else if (simbol1 == "7" && simbol2 == "7" && simbol3 == "7"){
        console.log(consoleCod);
        console.log(`*** JACKPOT ***`);
    }else{
        console.log(consoleCod);
    }
}
