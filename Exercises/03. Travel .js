function Travel ([x, v, y]){
    let lengthAB = Number(x);
    let truckSpeed = Number(v);
    let differenceSpeed = Number(y);
    let differenceSpeedKm = differenceSpeed * 3.6;
    let carSpeed = differenceSpeedKm + truckSpeed;
    let truckTime = lengthAB / truckSpeed;
    let carTime = lengthAB / carSpeed;
    console.log(`The truck arrived after ${Math.ceil(truckTime)} hours`);
    console.log(`The car arrived after ${Math.ceil(carTime)} hours`);
}
