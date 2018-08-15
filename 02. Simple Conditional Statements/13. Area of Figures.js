function areaOfFigures ([arg1, arg2, arg3]){
    if (arg1 == "square"){
        let area = arg2*arg2;
        console.log(area);
    }else if (arg1 == "rectangle"){
        let area = arg2 * arg3;
        console.log(area);
    }else if (arg1 == "circle"){
        let area = Math.PI * arg2 * arg2;
        console.log(area);
    }else {
        let area = arg2*arg3/2;
        console.log(area);
    }
}
