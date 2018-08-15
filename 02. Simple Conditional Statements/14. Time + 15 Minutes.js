function time15Minutes ([hour, minets]){
    minets = Number(minets);
    minets = minets + 15;
    if (minets > 59){
        hour++;
        minets = minets - 60;
   }if (minets < 10){
		minets = "0" + minets;
   }if (hour > 23){
		hour = 0;
   }
   console.log(hour+":"+minets)
}
