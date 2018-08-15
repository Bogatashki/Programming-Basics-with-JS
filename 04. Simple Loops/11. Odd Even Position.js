function OddEvenPosition (num){
    let n = Number(num[0]);
    let even = 0;
    let odd = 0;
    let minOdd = Number.POSITIVE_INFINITY;
    let maxOdd = Number.NEGATIVE_INFINITY;
    let minEven = Number.POSITIVE_INFINITY;
    let maxEven = Number.NEGATIVE_INFINITY;

    for(let i = 1; i < n + 1; i++){
        if((i % 2) == 1){
            if(Number(num[i]) > maxOdd){
                maxOdd = Number(num[i]);
            }
            if(Number(num[i]) < minOdd){
                minOdd = Number(num[i]);
            }
            odd = odd + Number(num[i]);
        }else{
            if(Number(num[i]) > maxEven){
                maxEven = Number(num[i]);
            }
            if(Number(num[i]) < minEven){
                minEven = Number(num[i]);
            }
            even = even + Number(num[i]);
        }
    }
    if (minEven == Infinity){
        minEven = "No"
    }
    if (maxEven == -Infinity){
        maxEven = "No"
    }
    if (minOdd == Infinity){
        minOdd = "No"
    }
    if (maxOdd == -Infinity){
        maxOdd = "No"
    }
    console.log(`OddSum=${odd}`)
    console.log(`OddMin=${minOdd}`)
    console.log(`OddMax=${maxOdd}`)
    console.log(`EvenSum=${even}`)
    console.log(`EvenMin=${minEven}`)
    console.log(`EvenMax=${maxEven}`)   
}
