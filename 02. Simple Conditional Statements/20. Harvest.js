function harvest ([vineyard, grapes, wineLiter, worker]){
    vineyard = Number(vineyard);
    grapes = Number(grapes);
    wineLiter = Number(wineLiter);
    worker = Number(worker);
    let allGrapes = vineyard * grapes;
    let wine = allGrapes * 0.4 / 2.5;
    let litersLeft = wine - wineLiter;
    let literWorker = litersLeft / worker;
    let surplusWine = Math.max(wineLiter, wine) - Math.min(wineLiter, wine);
    if (wine >= wineLiter){
        console.log("Good harvest this year! Total wine: " + Math.floor(wine)  + " liters.");
        console.log(Math.ceil(surplusWine) + " liters left -> " + Math.ceil(literWorker) + " liters per person.");
    }else {
        console.log("It will be a tough winter! More " +Math.floor(surplusWine) + " liters wine needed.")
    }
}
