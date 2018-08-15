function stop ([arg]){
    let n = Number(arg);
    console.log(`${".".repeat(n+1)}${"_".repeat((n*2)+1)}${".".repeat(n+1)}`);
    for (let i = 0; i < n; i++){
        console.log(`${".".repeat(n-i)}//${"_".repeat((n*2)-1+(i*2))}\\\\${".".repeat(n-i)}`);
    }
    console.log(`//${"_".repeat((n*2)-3)}STOP!${"_".repeat(n*2-3)}\\\\`);
    for (let i = 0; i < n; i++){
        console.log(`${".".repeat(i)}\\\\${"_".repeat((n*4)-1-(i*2))}//${".".repeat(i)}`);
    }
}
