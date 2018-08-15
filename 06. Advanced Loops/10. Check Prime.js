function CheckPrime([arg]) {
    let n = Number(arg);
    let prime = true;
   for (let i = 2; i <= Math.sqrt(n); i++){
       if(n % i == 0) {
           prime = false;
           break;
       }
    }
    if (prime && n > 2){
        console.log('Prime'); 
    }else {
        console.log('Not Prime'); 
    }
}
