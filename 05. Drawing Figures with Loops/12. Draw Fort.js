function DrawFort (arg){
    arg = Number(arg);
    let e = 0;
    if (arg % 2 == 0){
        e = 4;
    }else{
        e = 3;
    }
    console.log("/" + "^".repeat(arg/2) + "\\" + "_".repeat((2*arg)-(arg+e)) + "/" + "^".repeat(arg/2) + "\\");
    for(i = 0; i < arg - 3; i++){
         console.log("|" + " ".repeat(arg/2) + " " + " ".repeat((2*arg)-(arg+e)) + " " + " ".repeat(arg/2) + "|");
    }
    console.log("|" + " ".repeat(arg/2) + " " + "_".repeat((2*arg)-(arg+e)) + " " + " ".repeat(arg/2) + "|");
    console.log("\\" + "_".repeat(arg/2) + "/" + " ".repeat((2*arg)-(arg+e)) + "\\" + "_".repeat(arg/2) + "/");  

}
