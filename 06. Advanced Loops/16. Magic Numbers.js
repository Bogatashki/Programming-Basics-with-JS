function magicNumbers ([num]){
    let n = Number(num);
    let macigNum = "";
    let multiplication = 0;
    let simbol1 = 0;
    let simbol2 = 0;
    let simbol3 = 0;
    let simbol4 = 0;
    let simbol5 = 0;
    let simbol6 = 0;
    let position1 = true;
    let position2 = true;
    let position3 = true;
    let position4 = true;
    let position5 = true;
    let position6 = true;
    let exit = 0;
    while(true){
        if (simbol1 == n && simbol2 == n && simbol3 == n && simbol4 == n && simbol5 == n && simbol6 == n || exit == 1){
            console.log(macigNum);
            break;
        }
        while(position1){
            simbol1++;
            position1 = false;
            if(simbol1 == n+1 || simbol1 == 10){    
                exit = 1;
            }
            break;
        }
        while(position2){
            simbol2++;
            position2 = false;
            if(simbol2 == n+1 || simbol2 == 10){    
                simbol2 = 1;
            }
            break;
        }
        while(position3){
            simbol3++;
            position3 = false;
            if(simbol3 == n+1 || simbol3 == 10){    
                simbol3 = 1;
            }
            break;
        }
        while(position4){
            simbol4++;
            position4 = false;
            if(simbol4 == n+1 || simbol4 == 10){    
                simbol4 = 1;
            }
            break;
        }
        while(position5){
            simbol5++;
            position5 = false;
            if(simbol5 == n+1 || simbol5 == 10){    
                simbol5 = 1;
            }
            break;
        }
        while(position6){
            simbol6++;
            if(simbol6 == n+1 || simbol6 == 10){    
                simbol6 = 1;   
            }
            if(simbol6 == n || simbol6 == 9){
                position5 = true;
                if(simbol5 == n || simbol5 == 9){
                    position4 = true;
                    if(simbol4 == n || simbol4 == 9){
                        position3 = true;
                        if(simbol3 == n || simbol3 == 9){
                            position2 = true;
                            if(simbol2 == n || simbol2 == 9){
                                position1 = true;
                            }
                        }
                    }
                }
            }
            break;
        }
        multiplication = simbol1 * simbol2 * simbol3 * simbol4 * simbol5 * simbol6;
        if (multiplication == n){
            macigNum += simbol1; 
            macigNum += simbol2;
            macigNum += simbol3;
            macigNum += simbol4;
            macigNum += simbol5;
            macigNum += simbol6 + " ";
        }
    }
}
