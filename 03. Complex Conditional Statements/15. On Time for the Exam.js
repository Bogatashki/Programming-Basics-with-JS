function OnTimeForTheExam ([hExam, mExam, hArrival, mArrival]){
    hExam = Number(hExam);
    mExam = Number(mExam);
    hArrival = Number(hArrival);
    mArrival = Number(mArrival);
    let hourExam = (hExam * 60) + mExam;
    let hourArrival = (hArrival * 60) + mArrival;
    let minutesBeforeAfter = Math.max(hourExam, hourArrival) - Math.min(hourExam, hourArrival);
    let hourBeforeAfter = 0;
    while (minutesBeforeAfter >= 60){
        hourBeforeAfter++;
        minutesBeforeAfter -= 60;
    }
    if (hourArrival > hourExam){
        console.log("Late");
        if (minutesBeforeAfter < 10){
            console.log(hourBeforeAfter + ":0" + minutesBeforeAfter + " hours after the start")
        } else if (minutesBeforeAfter >= 10 && hourBeforeAfter !=0) {
            console.log(hourBeforeAfter + ":" + minutesBeforeAfter + " hours after the start")
        } else{
                console.log(minutesBeforeAfter + " minutes after the start")
            }
    }else if  (minutesBeforeAfter <= 30 && hExam == hArrival && hourArrival > hourExam){
        console.log("Late");
        console.log(minutesBeforeAfter + " minutes after the start");   
    }else if ((hourArrival < hourExam) && (minutesBeforeAfter <=30) && hourBeforeAfter == 0){
        console.log("On time");
        console.log(minutesBeforeAfter + " minutes before the start") 
    }else if (hourArrival == hourExam ){
        console.log("On time");
    }else if (hourArrival < hourExam ){
        console.log("Early");
    if (minutesBeforeAfter < 10){
        console.log(hourBeforeAfter + ":0" + minutesBeforeAfter + " hours before the start");
        
    } else if (minutesBeforeAfter >= 10 && hourBeforeAfter != 0){
        console.log(hourBeforeAfter + ":" + minutesBeforeAfter + " hours before the start");
    } else {   
        console.log( minutesBeforeAfter + " minutes before the start");
    }
    }
}
