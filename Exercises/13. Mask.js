function Mask ([arg]){
    let n = Number(arg);
    let width = (2*n)+2;
    for(let i = 0; i < n-1; i++){
    console.log(`${" ".repeat(n-2-i)}/${" ".repeat(i)}|  |${" ".repeat(i)}\\`);
    }
    console.log(`${"-".repeat(width)}`);
    
    console.log(`|${" ".repeat(n/2-1)}_${" ".repeat(width-(n/2-1)*2-3)}_${" ".repeat(n/2-1)}|`);
    console.log(`|${" ".repeat(n/2-1)}@${" ".repeat(width-(n/2-1)*2-3)}@${" ".repeat(n/2-1)}|`);
    for(let i = 0; i <= n/2-1; i++){
    console.log(`|${" ".repeat(width-2)}|`);
    }

    console.log(`|${" ".repeat(width/2-3)} OO ${" ".repeat(width/2-3)}|`);
    console.log(`|${" ".repeat(width/2-3)}/  \\${" ".repeat(width/2-3)}|`);
    console.log(`|${" ".repeat(width/2-3)}||||${" ".repeat(width/2-3)}|`);
    for(let i = 1; i <= n+1; i++){
        console.log(`${"\\".repeat(i)}${"`".repeat(width-i-i)}${"/".repeat(i)}`);
        }
}
