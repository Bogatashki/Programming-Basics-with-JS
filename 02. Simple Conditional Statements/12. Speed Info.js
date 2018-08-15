function speedInfo ([arg]){
    arg = Number(arg);
    if (arg <= 10){
        console.log("slow");
    }else if (arg >10 && arg <= 50){
        console.log("average");
    }else if (arg >50 && arg <= 150){
        console.log("fast");
    }else if (arg >150 && arg <= 1000){
        console.log("ultra fast");
    }else {
        console.log("extremely fast");
    }
}
