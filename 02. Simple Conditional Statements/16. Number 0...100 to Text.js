function numbertoText ([arg1]){
    arg1 = String(arg1);
	let arg3 = 0
	let arg2 = 0;
	if (arg1 < 20){
		arg2 = "skip";
	}else if (arg1 == 100){
	    arg2 = "";
	}else{
		arg3 = arg1.charAt(2)
       arg2 = arg1.charAt(1);
       arg1 = arg1.charAt(0) + "0";
	   
       }
	   if (arg3 != 0){
	   arg1 = "invalid number";
	   arg2 = "";
	}	else if (arg1 == 0){
		arg1 = "zero";
	}	else if (arg1 == 1){
        arg1 = "one";
    }    else if (arg1 == 2){
        arg1 = "two";
    }   else if (arg1 == 3){
        arg1 = "three";
    }     else if (arg1 == 4){
        arg1 = "four";
    }     else if (arg1 == 5){
        arg1 = "five";
    }     else if (arg1 == 6){
        arg1 = "six";
    }     else if (arg1 == 7){
        arg1 = "seven";
    }     else if (arg1 == 8){
        arg1 = "eight";
    }     else if (arg1 == 9){
        arg1 = "nine";
    }    else if (arg1 == 10){
        arg1 = "ten";
    }   else if (arg1 == 11){
        arg1 = "eleven";
    }     else if (arg1 == 12){
        arg1 = "twelve";
    }     else if (arg1 == 13){
        arg1 = "thirteen"
    }     else if (arg1 == 14){
        arg1 = "fourteen";
    }     else if (arg1 == 15){
        arg1 = "fifteen";
    }     else if (arg1 == 16){
        arg1 = "sixteen";
    }     else if (arg1 == 17){
        arg1 = "seventeen";
    }      else if (arg1 == 18){
        arg1 = "eighteen";
    }     else if (arg1 == 19){
        arg1 = "nineteen";
    }     else if (arg1 == 20){
        arg1 = "twenty";
    }     else if (arg1 == 30){
		arg1 = "thirty";
    }     else if (arg1 == 40){
        arg1 = "forty";
    }     else if (arg1 == 50){
        arg1 = "fifty";
    }     else if (arg1 == 60){
        arg1 = "sixty";
    }     else if (arg1 == 70){
        arg1 = "seventy";
    }     else if (arg1 == 80){
        arg1 = "eighty";
    }     else if(arg1 == 90){
        arg1 = "ninety";
    }  	else if(arg1 == 100){
		arg1 = "one hundred";
	}	else{
		arg1 = "invalid number";	
	}

   
		if(arg2 == 0){
		arg2 ="";
		}
		else if (arg2 == "skip"){
		arg2 = "";
		}
		else if(arg2 == 1){
        arg2 = " one";
    }    else if (arg2 == 2){
        arg2 = " two";
    }   else if (arg2 == 3){
        arg2 = " three";
    }     else if (arg2 == 4){
        arg2 = " four";
    }     else if (arg2 == 5){
        arg2 = " five";
    }     else if (arg2 == 6){
        arg2 = " six";
    }     else if (arg2 == 7){
        arg2 = " seven";
    }     else if (arg2 == 8){
        arg2 = " eight";
    }     else if (arg2 == 9){
        arg2 = " nine";
    }   
	console.log(arg1 + arg2);
}
