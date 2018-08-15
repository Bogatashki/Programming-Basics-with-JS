function  Arrow ([n]){
    n = Number(n);
    let width = n + 5;
    let leftRight = (width - 1) / 2;

    console.log(`${"_".repeat(leftRight)}^${"_".repeat(leftRight)}`)
    console.log(`${"_".repeat(leftRight-1)}/|\\${"_".repeat(leftRight-1)}`)
    for (let i = 0; i < n/2; i++){
        console.log(`${"_".repeat(leftRight-i-2)}/${".".repeat(i)}|||${".".repeat(i)}\\${"_".repeat(leftRight-i-2)}`)
    }
    console.log(`${"_".repeat(leftRight-4)}/..|||..\\${"_".repeat(leftRight-4)}`);
    console.log(`${"_".repeat(leftRight-4)}_/.|||.\\_${"_".repeat(leftRight-4)}`);
    for (let i = 0; i < n; i++){
        console.log(`${"_".repeat(n / 2 + 1)}|||${"_".repeat(n / 2 + 1)}`);
    }
    console.log(`${"_".repeat(n / 2 + 1)}~~~${"_".repeat(n / 2 + 1)}`);
    for (let i = 0; i < n/2; i++){
        console.log(`${"_".repeat(leftRight-i-2)}//${".".repeat(i)}!${".".repeat(i)}\\\\${"_".repeat(leftRight-i-2)}`);
    }
}
