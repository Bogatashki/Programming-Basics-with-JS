function NumberTable (arg) {
    let num = Number(arg);
    let digit = 0;
    let text = "";
    for (let row = 1; row <= num; row++){
        for (let col = row; col < row + num; col++){
            
            if (col <= num){
                digit = col;
            }else {
                digit--;
            }
            text += digit + " "; 
        }
        console.log(text);
        text = ""
    }   
}
