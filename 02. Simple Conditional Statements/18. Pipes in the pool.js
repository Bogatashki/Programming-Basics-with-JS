function pipeInPool ([volumeV, pipe1, pipe2, hour]){
    volumeV = Number(volumeV);
    pipe1 = Number(pipe1);
    pipe2 = Number(pipe2);
    hour = Number(hour);
    let pipe1Hour = pipe1 * hour;
    let pipe2Hour = pipe2 * hour;
    let volumeVPool = pipe1Hour + pipe2Hour;
    let pipe1HourPercent = (pipe1Hour * 100) / volumeVPool;
    let pipe2HourPercent = (pipe2Hour * 100) / volumeVPool;
    
    let volumeVPoolPercent = (volumeVPool * 100) / volumeV;
    if (volumeVPool <= volumeV){
        console.log(  "The pool is " + Math.floor(volumeVPoolPercent) + "% full. Pipe 1: " + Math.floor(pipe1HourPercent) + "%. Pipe 2: " + Math.floor(pipe2HourPercent) + "%.");
    
    }else  {
        let overflowsPool = volumeVPool - volumeV;
        console.log("For " + hour +" hours the pool overflows with " + overflowsPool.toFixed(1) + " liters.");
    }
}
