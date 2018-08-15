function Sunglasses (arg){
    let n = Number(arg);
    console.log("*".repeat(n*2) + " ".repeat(n) + "*".repeat(n*2));
    for(i = 1; i <= n-2; i++){
        if(Math.floor((n-1) / 2  ) !== i ){
            console.log("*" + "/".repeat(2*n-2 ) + "*" + " ".repeat(n) + "*" + "/".repeat(2*n-2 ) + "*" );
        }else{
            console.log("*" + "/".repeat(2*n-2 ) + "*" + "|".repeat(n) + "*" + "/".repeat(2*n-2 ) + "*" );
        }   
    }
    console.log("*".repeat(n*2) + " ".repeat(n) + "*".repeat(n*2));
}
