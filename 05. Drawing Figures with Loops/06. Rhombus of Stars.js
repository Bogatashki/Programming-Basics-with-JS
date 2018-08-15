function rhombusOfStars (arg){
    arg = Number(arg);
    for(i = 1; i <= arg; i++){
        console.log(" ".repeat(arg-i) + "* ".repeat(i) + " ".repeat(arg-i));
    }
    
    for(i = arg - 1; i > 0; i--){
        console.log(" ".repeat(arg-i) + "* ".repeat(i) + " ".repeat(arg-i));
    }
}
