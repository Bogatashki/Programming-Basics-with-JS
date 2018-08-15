function balls (arg){
    let num = arg[0];
    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherColors = 0;
    let blackBalls = 0;
    let points = 0;    

    for (let i = 1; i <= num; i++){
        if(arg[i] == "red"){
            totalPoints += 5;  
            redBalls ++;

        }else if(arg[i] == "orange"){
            totalPoints += 10;
            orangeBalls ++;

        }else if(arg[i] == "yellow"){
            totalPoints += 15;
            yellowBalls ++;

        }else if(arg[i] == "white"){
            totalPoints += 20;
            whiteBalls ++;

        }else if(arg[i] == "black"){
            totalPoints /= 2;
            blackBalls ++;

        }else {
            otherColors++;
        }
    }
    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Points from red balls: ${redBalls}`);
    console.log(`Points from orange balls: ${orangeBalls}`);
    console.log(`Points from yellow balls: ${yellowBalls}`);
    console.log(`Points from white balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}
