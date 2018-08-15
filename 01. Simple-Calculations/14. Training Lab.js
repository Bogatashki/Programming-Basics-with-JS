function trainingLab ([height, width]){
    let heightCm = height * 100; 
    let rows = heightCm / 120;
    let widthCm = width * 100;
    let widthWork = widthCm - 100;
    let column = widthWork / 70;
    let NumberPlaces = (Math.floor(rows) * Math.floor(column)) - 3;
    console.log(NumberPlaces);
}
trainingLab ([15, 8.9]);
