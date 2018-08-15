function matchTickets ([budget, categories, number]){
    budget = Number(budget);
    number = Number(number);
    let budget1 = 0; 
    if (number >=1 && number <=4){
       let transport = budget * 0.75;
       budget1 = budget - transport;
    }else if (number >=5 && number <=9){
        let transport  = budget * 0.6;
        budget1 = budget - transport;
    }else if (number >=10 && number <=24){
        let transport  = budget * 0.5;
        budget1 = budget - transport;
    }else if (number >=25 && number <=49){
        let transport  = budget * 0.4;
        budget1 = budget - transport;
    }else if (number >=50){
        let transport  = budget * 0.25;
        budget1 = budget - transport;
    }
    
    if (categories == "VIP"){
        let priceTickets = number * 499.99;
        if(priceTickets <= budget1){
            let N = budget1 - priceTickets;
            console.log(`Yes! You have ${N.toFixed(2)} leva left.`)
        }else {
            let N = priceTickets - budget1;
            console.log(`Not enough money! You need ${N.toFixed(2)} leva.`)
        }
    }else {
        let priceTickets = number * 249.99;
        if(priceTickets <= budget1){
            let N = budget1 - priceTickets;
            console.log(`Yes! You have ${N.toFixed(2)} leva left.`)
        }else {
            let N = priceTickets - budget1;
            console.log(`Not enough money! You need ${N.toFixed(2)} leva.`)
        }
    }
}
