function bonusScore ([arg]){
    arg = Number(arg);
    let bonus = 0;
    if (arg <= 100){
        bonus = 5;
    }else if (arg <= 1000 ){
        bonus = 0.2*arg;
    }else {
        bonus = 0.1*arg;
    }
    if (arg % 2 == 0){
        bonus = bonus + 1;
    } else if (arg % 10 == 5){
        bonus = bonus + 2;
    }
    console.log (bonus);
    console.log (bonus + arg);
}
