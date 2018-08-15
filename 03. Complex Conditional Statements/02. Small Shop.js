function smallShop ([arg1, arg2, arg3]){
    arg3 = Number(arg3);
    let price = 0;
    if (arg2 == "Sofia"){
        if (arg1 == "coffee"){
            price = 0.5;
        }else if (arg1 == "water"){
            price = 0.8;
        }else if (arg1 == "beer"){
            price = 1.2;
        }else if (arg1 == "sweets"){
            price = 1.45;
        }else if (arg1 == "peanuts"){
            price = 1.6;
        }
    }else if(arg2 == "Varna"){
        if (arg1 == "coffee"){
            price = 0.45;
        }else if (arg1 == "water"){
            price = 0.7;
        }else if (arg1 == "beer"){
            price = 1.1;
        }else if (arg1 == "sweets"){
            price = 1.35;
        }else if (arg1 == "peanuts"){
            price = 1.55;
        }        
    }else if(arg2 == "Plovdiv"){
        if (arg1 == "coffee"){
            price = 0.4;
        }else if (arg1 == "water"){
            price = 0.7;
        }else if (arg1 == "beer"){
            price = 1.15;
        }else if (arg1 == "sweets"){
            price = 1.3;
        }else if (arg1 == "peanuts"){
            price = 1.5;
        }
    }
    console.log(price * arg3);
}
