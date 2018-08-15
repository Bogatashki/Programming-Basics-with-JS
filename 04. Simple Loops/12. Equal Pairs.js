function EqualPairs(num){
    let n = Number(num[0]);
    let firstParts = 0;
    let objDiff = [];
    let sumParts = [];
    let j = 1;
    let x = 3;
    let yesValue = 1;
    let y = 1;
    for(let i = 0; i < n; i++){
        for (let i = 1; i <= 2; i++){
            firstParts = firstParts + Number(num[j++]);
            sumParts.push(firstParts);
        }
        firstParts = 0;
    }
    for(let i = 0; i < n-1; i++){
        
        if(sumParts[1] == sumParts[x]){
            yesValue++
        }
        x = x + 2;
    }   
    if(yesValue == n){
        console.log(`Yes, value=${sumParts[1]}`)
    }else {
        for(let i = 0; i < n-1; i++){
            
            let diff = Math.max(sumParts[y], sumParts[y+2]) - Math.min(sumParts[y], sumParts[y+2])
            objDiff.push(diff );
            y = y + 2;
        }
        let arr = Object.values(objDiff);
        let max = Math.max(...arr);
        console.log(`No, maxdiff=${max}`) 
    }
}
