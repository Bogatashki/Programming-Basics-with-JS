function catTom ([holidays]){
    holidays = Number(holidays);
    let tomGameNormYearMin = 30000;
    let workDayGame = 63;
    let holidaysGame = 127;
    let workDayInYear = 365 - holidays;
    let RealGameYear = (workDayInYear * workDayGame) + (holidays * holidaysGame);
    let differenceNorm = Math.max(tomGameNormYearMin, RealGameYear) - Math.min(tomGameNormYearMin, RealGameYear);
   
        if (differenceNorm < tomGameNormYearMin && tomGameNormYearMin > RealGameYear){
            let num = differenceNorm;
            let hours = (num / 60);
            let rhours = Math.floor(hours);
            let minutes = (hours - rhours) * 60;
            let rminutes = Math.round(minutes);   
            console.log("Tom sleeps well");
            console.log(rhours +" hours and "+ rminutes +" minutes less for play");
        }else {
            let num = differenceNorm;
            let hours = (num / 60);
            let rhours = Math.floor(hours);
            let minutes = (hours - rhours) * 60;
            let rminutes = Math.round(minutes);
        
            console.log("Tom will run away");
            console.log(rhours +" hours and "+ rminutes +" minutes more for play");      
        }
}
