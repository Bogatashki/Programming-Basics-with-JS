function volleyball ([year, p, h]){
    p = Number(p);
    h = Number(h);
    let weekendSofia = 48-h;
    let weekendSofiaGame = weekendSofia*3/4;
    let weekenHometownGame = h;
    let holidaySofiaGame = p*2/3;
    let allHolidayGame = weekendSofiaGame + weekenHometownGame + holidaySofiaGame;
    if (year == "leap"){
        let overGame = allHolidayGame * 0.15;
        let allGame = overGame + allHolidayGame;
        console.log(Math.floor(allGame));
    }else {
        console.log(Math.floor(allHolidayGame));
    }
}
