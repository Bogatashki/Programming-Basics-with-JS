function personalTitles ([arg1, arg2]){
    arg1 = Number(arg1);
    if (arg2 == "f"){
        if (arg1<16){
            console.log("Miss");
        }else{
            console.log("Ms.");
        }
    }else {
        if(arg1<16){
            console.log("Master");
        }else {
            console.log("Mr.")
        }
        
    }

}
