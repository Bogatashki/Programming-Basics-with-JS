function StupidPasswordGenerator ([arg1, arg2]){
    let n = Number(arg1);
    let n1 = Number(arg2);
    let leter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    let pass = "";
    let simbol1 = 0;
    let simbol2 = 0;
    let simbol3 = -1;
    let simbol4 = -1;
    let simbol5 = Math.max(simbol1+1, simbol2+1) + 1;
    let position1 = true;
    let position2 = true;
    let position3 = true;
    let position4 = true;
    let position5 = true;
    
    while(true){
        if(simbol1 == n-1 && simbol2 == n-1 && simbol3 == n1-1 && simbol4 == n1-1 && simbol5==n){
            break;
        }
        while(position1){
            position1 = false;       
            simbol1++;
            simbol5 = Math.max(simbol1, simbol2) + 1;
            if(simbol1 == n){    
                simbol1 = 1;
            }
            break;
        }
        pass += simbol1;
        while(position2){
            position2 = false;
            simbol2++;
            simbol5 = Math.max(simbol1, simbol2) + 1;
            if(simbol2 == n){    
                simbol2 = 1;
                simbol5 = Math.max(simbol1, simbol2) + 1;
            }
            break;
        }
        pass += simbol2;
        while(position3){
            position3 = false;
            simbol3++;
            if(simbol3 == n1){    
                simbol3 = 0;
            }
            break;
        }
        pass += leter[simbol3];
        while(position4){
            position4 = false;
            simbol4++;
            if(simbol4 == n1){ 
                simbol4 = 0;
            }
            break;
        }
        pass += leter[simbol4];
        while(position5){                           
            if(simbol5 < n+1) {
                pass += simbol5 + ' ';
                simbol5++; 
                if(simbol5==n+1){
                    position4 = true;
                    simbol5 = Math.max(simbol1, simbol2) + 1;
                    if(simbol4 == n1-1){
                        position3 = true;
                        if(simbol3 == n1-1){
                            position2 = true;
                            if(simbol2 == n-1){
                                position1 = true;   
                            }
                        }
                    }
                }                             
            }
        break; 
        }   
    }
console.log(pass);
}
