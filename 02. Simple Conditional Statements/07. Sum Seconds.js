function sumSeconds ([arg1, arg2, arg3]){
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    arg3 = Number(arg3);
    let time = arg1 + arg2 + arg3;
    let min = 0;
    if (time >= 60){
        min++;
        time -= 60;
    }
    if (time >= 60){
        min++;
        time -= 60;
    }
    if (time < 10) {
        console.log(min +':'+'0'+ time);
    }else {
        console.log(min +':'+ time);
    }
}
