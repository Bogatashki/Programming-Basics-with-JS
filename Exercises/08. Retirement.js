function Retirement ([gender, ageUser, lengthOfServiceUser]){
    ageUser = Number(ageUser);
    lengthOfServiceUser = Number(lengthOfServiceUser);
    let age = 0;
    let lengthOfService = 0;
    if (gender == "female"){
        if (ageUser >= 61 && lengthOfServiceUser >= 35){
            console.log(`Ready to retire at ${ageUser} and ${lengthOfServiceUser} years of experience!`)
        }else if(ageUser >= 61 && lengthOfServiceUser < 35){
            console.log(`Old enough, but haven't worked enough. Work experience left to retirement: ${Math.max(lengthOfServiceUser, 35) - Math.min(lengthOfServiceUser, 35)}.`)
        }else if(ageUser < 61 && lengthOfServiceUser >= 35){
            console.log(`Worked enough, but not old enough. Years left to retirement: ${Math.max(61, ageUser) - Math.min(61, ageUser)}.`)
        }else if(ageUser < 61 && lengthOfServiceUser < 35){
            console.log(`Too early. Years left to retirement: ${Math.max(61, ageUser) - Math.min(61, ageUser)}. Work experience left to retirement: ${Math.max(lengthOfServiceUser, 35) - Math.min(lengthOfServiceUser, 35)}.`)
        }
    }else if (gender == "male"){
        if (ageUser >= 64 && lengthOfServiceUser >= 38){
            console.log(`Ready to retire at ${ageUser} and ${lengthOfServiceUser} years of experience!`)
        }else if(ageUser >= 64 && lengthOfServiceUser < 38){
            console.log(`Old enough, but haven't worked enough. Work experience left to retirement: ${Math.max(lengthOfServiceUser, 38) - Math.min(lengthOfServiceUser, 38)}.`)
        }else if(ageUser < 64 && lengthOfServiceUser >= 38){
            console.log(`Worked enough, but not old enough. Years left to retirement: ${Math.max(64, ageUser) - Math.min(64, ageUser)}.`)
            
        }else if(ageUser < 64 && lengthOfServiceUser < 38){
            console.log(`Too early. Years left to retirement: ${Math.max(64, ageUser) - Math.min(64, ageUser)}. Work experience left to retirement: ${Math.max(lengthOfServiceUser, 38) - Math.min(lengthOfServiceUser, 38)}.`)
        }
    }else{
            console.log(`Invalid input.`)
        }
}
