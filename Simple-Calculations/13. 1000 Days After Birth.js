function onTime([examHours, examMinutes, arrivalHours, arrivalMinutes]){
    examHours = Number(examHours);
    examMinutes = Number(examMinutes);
    arrivalHours = Number(arrivalHours);
    arrivalMinutes = Number(arrivalMinutes);
 
    let examTimeInMinutes = (examHours * 60) + examMinutes;
    let arrivalTimeInMinutes = (arrivalHours * 60) + arrivalMinutes;
    let minutesDifference = Math.max(examTimeInMinutes, arrivalTimeInMinutes) - Math.min(examTimeInMinutes, arrivalTimeInMinutes);
    let hoursDifference = 0;
 
    while (minutesDifference >= 60){
        hoursDifference++;
        minutesDifference -= 60;
    }
 
    if (examTimeInMinutes == arrivalTimeInMinutes){
        console.log("On time");
    } else if ((examTimeInMinutes > arrivalTimeInMinutes) && (minutesDifference <= 30) && hoursDifference == 0){
        console.log("On time");
        console.log(`${minutesDifference} minutes before the start`);
    } else if ((arrivalTimeInMinutes < examTimeInMinutes)){
        console.log("Early");
        if (minutesDifference < 10){
            console.log(`${hoursDifference}:0${minutesDifference} hours before the start`);
        } else if (minutesDifference >= 10 && hoursDifference != 0){
            console.log(`${hoursDifference}:${minutesDifference} hours before the start`);
        } else {
            console.log(`${minutesDifference} minutes before the start`);
        }
    } else if (arrivalTimeInMinutes > examTimeInMinutes){
        console.log("Late");
        if (minutesDifference < 10){
            console.log(`${hoursDifference}:0${minutesDifference} hours after the start`);
        } else if (minutesDifference >= 10 && hoursDifference != 0){
            console.log(`${hoursDifference}:${minutesDifference} hours after the start`);
        } else {
            console.log(`${minutesDifference} minutes after the start`);
        }
    }
}
onTime ([9, 00, 8, 30])
