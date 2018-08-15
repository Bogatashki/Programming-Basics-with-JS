function transportPrice ([km, hours]){
    km = Number(km);
    let train = 0;
    let taxi = 0;
    let bus = 0;
    if (hours == "day"){
        taxi = 0.70 +(0.79 * km);
            if (km >= 20){
                bus = 0.09 * km;
            }
            if (km >= 100){
                train = 0.06 * km;
                }        
    }else {
        taxi = 0.70 +(0.90 * km);
        if (km >= 20){
            bus = 0.09 * km;
        }
        if (km >= 100){
            train = 0.06 * km;
            } 

    }
    if (bus == 0){
        bus = 1000000000;
    }
    if (train == 0){
        train = 1000000000;
    }
    console.log(Math.min(taxi, bus, train).toFixed(2));
}
