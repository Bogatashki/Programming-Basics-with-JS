function ChristmasTree (arg){
    arg = Number(arg);
    for(i = 0; i <= arg; i++){
        console.log(" ".repeat(arg-i) + "*".repeat(i) + " | " + "*".repeat(i));
    }
}
