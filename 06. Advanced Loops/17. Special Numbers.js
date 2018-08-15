function specialNumbers ([num]){
    let n = Number(num);
    let specialNum = "";
    let simbol1 = 0;
    let simbol2 = 0;
    let simbol3 = 0;
    let simbol4 = 0;
    let position1 = true;
    let position2 = true;
    let position3 = true;
    let position4 = true;
    let exit = 0;
    while(true){
        while(position1){
            simbol1++;
            position1 = false;
            if(simbol1 == 10){    
                exit = 1;
            }
            break;
        }
        if (exit == 1){
            break;
        }
        while(position2){
            simbol2++;
            position2 = false;
            if(simbol2 == 10){    
                simbol2 = 1;
            }
            break;
        }
        while(position3){
            simbol3++;
            position3 = false;
            if(simbol3 == 10){    
                simbol3 = 1;
            }
            break;
        }
        while(position4){
            simbol4++;
            if( simbol4 == 10){    
                simbol4 = 1;
            }
            if(simbol4 == 9){
                position3 = true;
                if(simbol3 == 9){
                    position2 = true;
                    if(simbol2 == 9){
                        position1 = true;
                        if(simbol1 == 9){
                            position1 = true;
                        }
                    }
                }
            }
            break;
        }
        let special1 = n % simbol1;
        let special2 = n % simbol2;
        let special3 = n % simbol3;
        let special4 = n % simbol4;
        if (special1 == 0 && special2 == 0 && special3 == 0 && special4 == 0){
            specialNum += simbol1; 
            specialNum += simbol2;
            specialNum += simbol3; 
            specialNum += simbol4 + " ";
        }
    }
    console.log(specialNum);
}
