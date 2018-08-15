function PIN ([N]){
    N = Number(N);
    let width = 6 * N + 10;
    let heigth = 2 * N + 2;
    console.log("/`" + "P".repeat(N*2) + " ".repeat(N) + "/`I" + " ".repeat(N) + "/`N" + " ".repeat((N*2)+1) + "N");
    for(let i = 1; i <= N - 1; i++){
        console.log("| " + "P" +" ".repeat((N*2-2)) + "P" + " ".repeat(N) + "| I" + " ".repeat(N) + "| N" + " ".repeat(i-1) + "N" + " ".repeat((N*2)+1-i) +"N"); 
    }
    console.log("| " + "P".repeat(N*2) + " ".repeat(N) + "| I" + " ".repeat(N) + "| N" + " ".repeat(N-1)+"N"+" ".repeat(N+1) + "N");
    for(let i = 1; i <= N; i++){
        console.log("| " + "P".repeat(Math.floor(N/2)) +" ".repeat((N*2-1)-Math.floor(N/2)) + " " + " ".repeat(N) + "| I" + " ".repeat(N) + "| N" + " ".repeat(N-1+i) + "N" + " ".repeat((N)+1-i) +"N"); 
    }
    console.log("\\_" + "P".repeat(Math.floor(N/2))+" ".repeat((N*2)-Math.floor(N/2)) + " ".repeat(N) + "\\_I" + " ".repeat(N) + "\\_N" + " ".repeat((N*2)) + "NN");

}
