function primePairs ([arg1, arg2, arg3, arg4]){
    let begining1 = Number(arg1);
    let begining2 = Number(arg2);
    let end1 = Number(arg3) + begining1;
    let end2 = Number(arg4) + begining2;
    //let text = "";
    for (let i = begining1; i <= end1; i++){
        for (let j = begining2; j <= end2; j++){
            let prime1 = true;
            let prime2 = true;
            for (let k = 2; k <= Math.sqrt(i); k++){
                if(i % k == 0) {
                    prime1 = false;
                }
            }
            for (let a = 2; a <= Math.sqrt(j); a++){
                if(j % a == 0) {
                    prime2 = false;
                }
            }
            if ((prime2 && j >= 2) && (prime1 && i >= 2)){
                
                console.log(""+i+j);
            }
        }
    }
}
