function Cellphones ([budgetFirm, phoneNum, phoneMatck]){
    budgetFirm = Number(budgetFirm);
    phoneNum = Number(phoneNum);
    let numDiscount = 0;
    let discountPrice = 0;

    if (phoneMatck === "Gsm4e"){
        if(phoneNum > 10 && phoneNum <= 20){
            numDiscount = 0.02;
        }else if (phoneNum > 20 && phoneNum <= 50){
            numDiscount =  0.05;
        }else if (phoneNum > 50){
            numDiscount =  0.05;
        }
        let pricePhone = 20.5 * phoneNum;

        discountPrice = pricePhone - (pricePhone * (0.01 + numDiscount));
        
    }else if (phoneMatck === "Mobifon4e"){
        if(phoneNum > 10 && phoneNum <= 20){
            numDiscount = 0.02;
        }else if (phoneNum > 20 && phoneNum <= 50){
            numDiscount =  0.05;
        }else if (phoneNum > 50){
            numDiscount =  0.05;
        }
        let pricePhone = 50.75 * phoneNum;
        discountPrice = pricePhone - (pricePhone * (0.02 + numDiscount));
        
    }else if (phoneMatck === "Telefon4e"){
        if(phoneNum > 10 && phoneNum <= 20){
            numDiscount = 0.02;
        }else if (phoneNum > 20 && phoneNum <= 50){
            numDiscount =  0.05;
        }else if (phoneNum > 50){
            numDiscount =  0.05;
        }
        let pricePhone = 115 * phoneNum;
        discountPrice = pricePhone - (pricePhone * (0.03 + numDiscount));
        
    }
    let ost = Math.max (budgetFirm, discountPrice) - Math.min (budgetFirm, discountPrice);
    if(budgetFirm <= discountPrice){
        console.log(`Not enough money for all mobiles. Company needs ${ost.toFixed(2)} more leva.`)
    }else{
        console.log(`The company bought all mobile phones. ${ost.toFixed(2)} leva left.`)        
    }
}
