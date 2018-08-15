function Sword ([arg]){
    let n = Number(arg);
    let width = (2*n) + 1;
    let leftRight = n - 1;
    let bladeWidth = n;
    if (n % 2 == 0){
        bladeWidth++;
    }
    let remainderWidth = width - bladeWidth - 2;
    console.log(`${"#".repeat(leftRight)}/^\\${"#".repeat(leftRight)}`);
    for (let i = 1; i <= Math.floor(n/2); i++){
        console.log(`${"#".repeat(n-1-i)}.${" ".repeat(1+2*i)}.${"#".repeat(n-1-i)}`);
    }
    let soft = "SOFT";
    let uni = "UNI"
    for (let i = 0; i<4; i++){
    console.log(`${"#".repeat(remainderWidth / 2 )}|${" ".repeat((bladeWidth - 1)/2)}${soft[i]}${" ".repeat((bladeWidth - 1)/2)}|${"#".repeat(remainderWidth / 2 )}`);
    }
    
    for (let i = 0; i < Math.max(n-4, 1); i++){
        console.log(`${"#".repeat(remainderWidth / 2 )}|${" ".repeat((bladeWidth - 1)/2)} ${" ".repeat((bladeWidth - 1)/2)}|${"#".repeat(remainderWidth / 2 )}`);
    }
    for (let i = 0; i<3; i++){
        console.log(`${"#".repeat(remainderWidth / 2 )}|${" ".repeat((bladeWidth - 1)/2)}${uni[i]}${" ".repeat((bladeWidth - 1)/2)}|${"#".repeat(remainderWidth / 2 )}`);
        }
        console.log(`@${"=".repeat(width - 2)}@`);
        let hashTagCount = (remainderWidth / 2 ) +2;
    for (let i = 0; i < Math.floor(n/2); i++){
    console.log(`${"#".repeat(hashTagCount)}|${" ".repeat(width - (2*hashTagCount+2))}|${"#".repeat(hashTagCount)}`);
    }
    console.log(`${"#".repeat(hashTagCount)}\\${".".repeat(width - (2*hashTagCount+2))}/${"#".repeat(hashTagCount)}`);

}
