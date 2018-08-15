function EnterEvenNumber (args){
    let i = 0;
    let num = 0;
    while (true){
        num = Number(args[i]);
        if (num % 2 == 0){
            break;
        }
        if(num == Math.floor(num)){
            console.log('The number is not even.');
            i++;
        }else{
            console.log('Invalid number!');
            i++;
        }

    }
    console.log('Even number entered: '+num);
}
