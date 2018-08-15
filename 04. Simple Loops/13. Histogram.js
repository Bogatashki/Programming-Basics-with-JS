function Histogram (value){
    let n = Number(value[0]);
    let p1Value = [];
    let p2Value = [];
    let p3Value = [];
    let p4Value = [];
    let p5Value = [];
    let j = 0;
    for(let i = 0; i < n; i++){
        j++;
        if(Number(value[j]) < 200){
        p1Value.push(value[j]);
        }else if(Number(value[j]) >= 200 && Number(value[j]) <= 399){
            p2Value.push(value[j]);
        }else if(Number(value[j]) >= 400 && Number(value[j]) <= 599){
            p3Value.push(value[j]);
        }else if(Number(value[j]) >= 600 && Number(value[j]) <= 799){
            p4Value.push(value[j]);
        }else if(Number(value[j]) >= 800){
            p5Value.push(value[j]);
        }
    }
    let p1 = p1Value.length / n * 100;
    let p2 = p2Value.length / n * 100;
    let p3 = p3Value.length / n * 100;
    let p4 = p4Value.length / n * 100;
    let p5 = p5Value.length / n * 100;
    console.log(p1.toFixed(2));
    console.log(p2.toFixed(2));
    console.log(p3.toFixed(2));
    console.log(p4.toFixed(2));
    console.log(p5.toFixed(2));
}
