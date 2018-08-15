function VowelsSum ([text]){
    let sum = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] == 'e'){
            sum = sum + 2;
        }else if(text[i] == 'a'){
            sum = sum + 1
        }else if(text[i] == 'i'){
            sum = sum + 3
        }else if(text[i] == 'o'){
            sum = sum + 4
        }else if(text[i] == 'u'){
            sum = sum + 5
        }
    }
    console.log(sum)
}
