function NumberPyramid (arg) {
    let num = Number(arg);
    let count = 0;
    let count1 = 0;
    let string = "";
    let loop = true;
    while (loop){
        count++; 
      
        for (let i = 0; i < count; i++){
            count1 ++;
            string += count1+" ";
            if (count1 == num){
                loop = false;
                break; 
            }
        }
        console.log(string);
        string = ""
    }
}
