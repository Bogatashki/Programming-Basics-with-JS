function CSGO (arg){
    let n = Number(arg[0]);
    let money = Number(arg[1]);
    let total = 0;
    let count = 0;
    while(true){
        if (n > 7){
        console.log(`Sorry, you can't carry so many things!`)
        break;
        }
        for (let i = 0; i < n; i++){
            let arsenal = arg[i+2];
            count++;
            if(arsenal == "ak47"){
                total += 2700;
            }
            if(arsenal == "awp"){
                total += 4750;
            }
            if(arsenal == "sg553"){
                total += 3500;
            }
            if(arsenal == "grenade"){
                total += 300;
            }
            if(arsenal == "flash"){
                total += 250;
            }
            if(arsenal == "glock"){
                total += 500;
            }
            if(arsenal == "bazooka"){
                total += 5600;
            }

        }
        if (total <= money){
            console.log(`You bought all ${count} items! Get to work and defeat the bomb!`);
        }else {
            console.log(`Not enough money! You need ${total - money} more money.`);
        }
        break;
    }

}
