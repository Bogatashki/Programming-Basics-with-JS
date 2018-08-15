function metricConverter([arg1, arg2, arg3]){
    arg1 = Number(arg1);
    let milimeters = 1000;
    let cenimeters = 100;
    let miles = 0.000621371192;
    let inches = 39.3700787;
    let kilometers = 0.001;
    let feet = 3.2808399;
    let yards = 1.0936133;
    let result = arg1;
    if (arg2 == "mm"){
        result = arg1 / milimeters;
    }else if(arg2 == "cm"){
        result = arg1 / cenimeters;
    }else if(arg2 == "mi"){
        result = arg1 / miles;
    }else if(arg2 == "in"){
        result = arg1 / inches;
    }else if(arg2 == "km"){
        result = arg1 / kilometers;
    }else if(arg2 == "ft"){
        result = arg1 / feet;
    }else if(arg2 == "yd"){
        result = arg1 / yards;
    }
    let resultInOut = result;
    if (arg3 == "mm"){
        resultInOut = result * milimeters;
    }else if(arg3 == "cm"){
        resultInOut = result * cenimeters;
    }else if(arg3 == "mi"){
        resultInOut = result * miles;
    }else if(arg3 == "in"){
        resultInOut = result * inches;
    }else if(arg3 == "km"){
        resultInOut = result * kilometers;
    }else if(arg3 == "ft"){
        resultInOut = result * feet;
    }else if(arg3 == "yd"){
        resultInOut = result * yards;
    }
    console.log(resultInOut + " " + arg3);
}
