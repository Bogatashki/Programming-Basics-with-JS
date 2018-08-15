function squareFrame ([arg]){
    arg = Number(arg);
    console.log("+ " + "- ".repeat(arg - 2) + "+")
    for (i = 1; i <= arg - 2; i++){
        console.log("| " + "- ".repeat(arg - 2) + "|")
    }
    console.log("+ " + "- ".repeat(arg - 2) + "+")
}
