function hotelRoom ([month, days]){
    days = Number(days);

    if (month == 'May' || month == 'October'){
        let studio = days * 50;
        let flat = days * 65;
        if (days > 7 && days < 14 ){
            let discount = studio * 0.05;
            console.log(`Apartment: ${flat.toFixed(2)} lv.`);
            console.log(`Studio: ${(studio - discount).toFixed(2)} lv.`);
        }else if (days > 14){
            let discount = studio * 0.3;
            let discount1 = flat * 0.1;
            console.log(`Apartment: ${(flat - discount1).toFixed(2)} lv.`);
            console.log(`Studio: ${(studio - discount).toFixed(2)} lv.`);            
        }else{
            console.log(`Apartment: ${flat.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);  
        }
    }else if (month == 'June' || month == 'September'){
        let studio = days * 75.2;
        let flat = days * 68.7;
        if (days > 7 && days < 14 ){
            let discount = studio * 0.05;
            console.log(`Apartment: ${flat.toFixed(2)} lv.`);
            console.log(`Studio: ${(studio - discount).toFixed(2)} lv.`);
        }else if (days > 14){
            let discount = studio * 0.2;
            let discount1 = flat * 0.1;
            console.log(`Apartment: ${(flat - discount1).toFixed(2)} lv.`);
            console.log(`Studio: ${(studio - discount).toFixed(2)} lv.`);            
        }else{
            console.log(`Apartment: ${flat.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);  
        }       
    }else if (month == 'July' || month == 'August'){
        let studio = days * 76;
        let flat = days * 77;
        if (days > 14){
            let discount1 = flat * 0.1;
            console.log(`Apartment: ${(flat - discount1).toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);            
        }else{
            console.log(`Apartment: ${flat.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);  
        }
    }
}
