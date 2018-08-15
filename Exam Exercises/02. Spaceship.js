function Spaceship ([SpaceshipWidth, SpaceshipLength, SpaceshipHeigth, AstroHeigth]){
    SpaceshipWidth = Number(SpaceshipWidth);
    SpaceshipLength = Number(SpaceshipLength);
    SpaceshipHeigth = Number(SpaceshipHeigth);
    AstroHeigth = Number(AstroHeigth);
    
    let VolumeSpaceship =  SpaceshipWidth * SpaceshipLength * SpaceshipHeigth;
    let roomVolume = (AstroHeigth + 0.40) * 2 * 2;
    let asrtoPasanger = Math.floor(VolumeSpaceship / roomVolume);
    if(asrtoPasanger > 3 && asrtoPasanger < 10){
        console.log(`The spacecraft holds ${asrtoPasanger} astronauts.`)
    }else if(asrtoPasanger < 3){
        console.log(`The spacecraft is too small.`)
    }else{
        console.log(`The spacecraft is too big.`)
    }
}
