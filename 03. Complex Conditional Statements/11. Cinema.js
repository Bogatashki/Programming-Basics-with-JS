function cinema ([type, row, colum]){
    row = Number(row);
    colum = Number(colum);
    switch (type){
        case "Premiere":
        console.log((12*row*colum).toFixed(2));
        break;
        case "Normal":
        console.log((7.5*row*colum).toFixed(2));
        break;
        case "Discount":
        console.log((5*row*colum).toFixed(2));
        break;
    }
}
