function OddEvenSum (num){
    let n = Number(num[0]);
    
    let even = 0;
    let odd = 0;
    for(let i = 1; i < n + 1; i++){
        if((i % 2) == 1){
            odd = odd + Number(num[i]);
        }else{
            even = even + Number(num[i]);
        }
    }
    if (even == odd){
        console.log(`Yes, Sum = ${odd}`)
    }else{
        let diff = Math.max(even, odd) - Math.min(even, odd);
        console.log(`No, diff = ${diff}`);
    }
}
