function tradeComissions ([town, sales]){
    sales = Number(sales);
    let commission = -1;
    if(town == "Sofia"){
        if (sales > 0){
            if (sales <= 500) {
                commission = 0.05*sales;
            } else if(sales <= 1000) {
                commission = 0.07*sales;
            } else if(sales <= 10000) {
                commission = 0.08*sales;
            } else if(sales > 10000) {
                commission = 0.12*sales;
            }
        }
    }else if (town == "Varna"){
        if (sales > 0){
            if (sales <= 500) {
                commission = 0.045*sales;
            } else if(sales <= 1000) {
                commission = 0.075*sales;
            } else if(sales <= 10000) {
                commission = 0.1*sales;
            } else if(sales > 10000) {
                commission = 0.13*sales;
            }
        }       
    }else if (town == "Plovdiv"){
        if (sales > 0){
            if (sales <= 500) {
                commission = 0.055*sales;
            } else if(sales <= 1000) {
                commission = 0.08*sales;
            } else if(sales <= 10000) {
                commission = 0.12*sales;
            } else if(sales > 10000) {
                commission = 0.145*sales;
            }
        }       
    }
    if(commission != -1){
        console.log(commission.toFixed(2) );
    }else {
        console.log("error");
    }
}
