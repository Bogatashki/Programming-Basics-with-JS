function vegetableMarket ([kgPriceVegetable, kgPriceFrut, allKgPriceVegetable, allKgPriceFrut]){
    kgPriceVegetable = Number(kgPriceVegetable);
    kgPriceFrut = Number(kgPriceFrut);
    allKgPriceVegetable = Number(allKgPriceVegetable);
    allKgPriceFrut = Number(allKgPriceFrut);
    let vegetable = kgPriceVegetable * allKgPriceVegetable;
    let frut = kgPriceFrut * allKgPriceFrut;
    let all = vegetable + frut;
    let euro = all / 1.94;
    console.log(euro.toFixed(2));

}
