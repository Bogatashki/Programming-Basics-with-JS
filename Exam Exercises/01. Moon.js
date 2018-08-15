function Moon ([speed, kmH]){
    speed = Number(speed);
    kmH = Number(kmH);
    let moonEartKm = 384400;
    let allmoonEartKm = moonEartKm * 2;
    let timeMoonEart =Math.ceil((moonEartKm*2)/speed);
    let olltimeMoonEart =Math.round (timeMoonEart + 3);
    let oil = (kmH * (moonEartKm * 2))/100;
    console.log(olltimeMoonEart);
    console.log(oil)

}
