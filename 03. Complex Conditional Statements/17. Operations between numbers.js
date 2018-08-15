function operationWithNumbers ([n1, n2, simbol]){
    n1 = Number(n1);
    n2 = Number(n2);
    if (simbol == "+" || simbol == "-" ||simbol == "*"){
        if (simbol == "+"){
            let result = n1 + n2;
                if ((result % 2) == 0){
                    console.log(`${n1} ${simbol} ${n2} = ${result} - ${"even"}`);
                } else {
                    console.log(`${n1} ${simbol} ${n2} = ${result} - ${"odd"}`);
                }
        }else if (simbol == "-") {
            let result = n1 - n2;
                if ((result % 2) == 0){
                    console.log(`${n1} ${simbol} ${n2} = ${result} - ${"even"}`);
                } else {
                    console.log(`${n1} ${simbol} ${n2} = ${result} - ${"odd"}`);
                }
        } else if (simbol == "*") {
            let result = n1 * n2;
                if ((result % 2) == 0){
                    console.log(`${n1} ${simbol} ${n2} = ${result} - ${"even"}`);
                } else {
                    console.log(`${n1} ${simbol} ${n2} = ${result} - ${"odd"}`);
                }
        }  
    }else if (simbol == "/" && n1 != 0 && n2 != 0) {
        let result = n1 / n2;
        console.log(`${n1} ${simbol} ${n2} = ${result.toFixed(2)}`);
    }else if (simbol == "%" && n1 != 0 && n2 != 0) {
        let result = n1 % n2;
        console.log(`${n1} ${simbol} ${n2} = ${result}`);
    }else {
        console.log(`Cannot divide ${n1} by zero`);
    }    
}
