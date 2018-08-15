function House (arg){
    arg = Number(arg);
    let starsCount = 0; 
    for(let i = 0; i < Math.floor((arg+1) / 2); i++){
        if(arg % 2 == 0){
            starsCount = 2 * (i + 1);
            console.log("-".repeat((arg-starsCount)/2) + "*".repeat(starsCount) + "-".repeat((arg-starsCount)/2));
        }else{
            starsCount = 2 * i + 1; 
            console.log("-".repeat((arg-starsCount)/2) + "*".repeat(starsCount) + "-".repeat((arg-starsCount)/2));
        }
    }
    for (let i = 0; i < Math.floor(arg / 2); i++) {
        console.log("|" + "*".repeat(starsCount - 2) + "|");
    }
}
