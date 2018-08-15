function LeftAndRightSum(num){
    let n = Number(num[0]);
    let leftSum = 0;
    let rightSum = 0;
    for (i = 1; i <= n; i++){
        leftSum = leftSum + Number(num[i]);

    }
    for (i = n + 1; i <= n * 2; i++){
        rightSum = rightSum + Number(num[i]);

    }
    if (leftSum == rightSum){
        console.log(`Yes, sum = ${rightSum}`);
    }else {
        let diff = Math.max(leftSum, rightSum) - Math.min(leftSum, rightSum);
        console.log(`No, diff = ${diff}`);
    }
}
