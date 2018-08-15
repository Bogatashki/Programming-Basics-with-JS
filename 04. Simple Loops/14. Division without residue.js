function partition(value){
    let n = Number(value[0]);
    let p1Value = [];
    let p2Value = [];
    let p3Value = [];
    let j = 1;
    for(let i = 0; i < n; i++){
        let num2 = Number(value[j]) % 2;
        let num3 = Number(value[j]) % 3;
        let num4 = Number(value[j]) % 4;
        j++;
        if(num2 == 0){
        p1Value.push(value[j]);
        }
        if(num3 == 0){
            p2Value.push(value[j]);
        }
        if(num4 == 0) {
            p3Value.push(value[j]);
        }
    }   
    let p1 = p1Value.length / n * 100;
    let p2 = p2Value.length / n * 100;
    let p3 = p3Value.length / n * 100;

    console.log(p1.toFixed(2)+"%");
    console.log(p2.toFixed(2)+"%");
    console.log(p3.toFixed(2)+"%");
}
