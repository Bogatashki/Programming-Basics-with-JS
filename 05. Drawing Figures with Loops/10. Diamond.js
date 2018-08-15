function Diamond (arg){
    arg = Number(arg);
    let starsCount = 0; 
    let even = arg % 2;
    for(let i = 0; i < Math.floor((arg+1) / 2); i++){
        if(even == 0){

            starsCount = 2 * (i + 1);
            console.log("-".repeat((arg-starsCount)/2) + "*".repeat(1) + "-".repeat(starsCount-2) +"*".repeat(1) + "-".repeat((arg-starsCount)/2));
        }else{
            if(i == 0){
                starsCount = 2 * i + 1; 
                console.log("-".repeat((arg-starsCount)/2) + "*".repeat(1) + "-".repeat(starsCount-even) + "-".repeat((arg-starsCount)/2));
            }else{        

            starsCount = 2 * i + 1; 

            console.log("-".repeat((arg-starsCount)/2) + "*".repeat(1) + "-".repeat(starsCount-2) +"*".repeat(1) + "-".repeat((arg-starsCount)/2));
            }
        }

    }
    for(let i = Math.floor((arg+1) / 2); i > 1; i--){

        
        if(even == 0){

            starsCount = 2 * (i - 1);
            console.log("-".repeat((arg-starsCount)/2) + "*".repeat(1) + "-".repeat(starsCount-2) +"*".repeat(1) + "-".repeat((arg-starsCount)/2));
        }else{
            if(i == 2){
                starsCount = 2 * i - 3; 
                console.log("-".repeat((arg-starsCount)/2) + "*".repeat(1) + "-".repeat(starsCount-even) + "-".repeat((arg-starsCount)/2));
            }else{        

            starsCount = 2 * i - 3; 

            console.log("-".repeat((arg-starsCount)/2) + "*".repeat(1) + "-".repeat(starsCount-2) +"*".repeat(1) + "-".repeat((arg-starsCount)/2));
            }
        }

    }
}
