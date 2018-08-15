function Illidan ([numGruop, powerGroup, ilidanBlade]){
    numGruop = Number(numGruop);
    powerGroup = Number(powerGroup);
    ilidanBlade = Number(ilidanBlade);
    let allPower = numGruop * powerGroup;
    let diference = Math.max(allPower, ilidanBlade) - Math.min(allPower, ilidanBlade);
    if(allPower >= ilidanBlade){
        console.log(`Illidan has been slain! You defeated him with ${diference} points.`)
    }else{
        console.log(`You are not prepared! You need ${diference} more points.`)
    }
}
