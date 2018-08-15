function butterfly (arg){
    let n = Number(arg);
    let row = (n - 2) + 1;
    for (let i = 1; i < row; i++){
        if (i % 2 == 1){
            console.log(`${"*".repeat(n-2)}\\ /${"*".repeat(n-2)}`)
        }else{
            console.log(`${"-".repeat(n-2)}\\ /${"-".repeat(n-2)}`)
            
        }
    }
    console.log(`${" ".repeat(n-1)}@`)
    for (let i = 1; i < row; i++){
        if (i % 2 == 1){
            console.log(`${"*".repeat(n-2)}/ \\${"*".repeat(n-2)}`)
        }else{
            console.log(`${"-".repeat(n-2)}/ \\${"-".repeat(n-2)}`)
            
        }
    }
}
