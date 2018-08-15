function PointInTheFigure ([h, x, y]){
    h = Number(h);
    x = Number(x);
    y = Number(y);
    if (y < 0 || y > (h * 4)){
        console.log("outside");
    }else if(y == 0){
        if (x >= 0 && x <= (h *3)) {
            console.log("border");
        }else {
            console.log("outside");
        }
    }else if (y > 0 && y < h){
        if (x < 0 || x > (3 * h)){
            console.log("outside");
        }else if(x == 0 || x == (3 * h)){
            console.log("border");
        }else if (x > 0 && x < (3 * h)){
            console.log("inside");
        }
    }else if (y == h){
        if (x >= 0 && x <= h || x >= (2 * h) && x <= (3 * h)){
            console.log("border");
        }else if(x > h && x < (2 * h)){
            console.log("inside");
        }else if(x > (3 * h) || x < 0){
            console.log("outside");
        }
    }else if (y > h && y < (4 * h)){
        if (x < h || x > (2 * h)){
            console.log("outside");
        }else if (x == h || x == (2 * h)){
            console.log("border");
        }else if (x > h || x < (2 * h)){
            console.log("inside");
        }
    }else if (y == (4 * h)){
        if (x < h || x > (2 * h)){
            console.log("outside");
        }else if (x >= h || x <= (2 * h)){
            console.log("border");
        }
    }else {
        console.log("outside");
    }
}
