function PCStore ([arg1, arg2, arg3, arg4, arg5]){
    let cpu = Number(arg1);
    let videoCard = Number(arg2);
    let ram = Number(arg3);
    let ramNum = Number(arg4);
    let discount = Number(arg5);
    let cpuDollar = cpu * 1.57;
    let videoCardDollar = videoCard * 1.57;
    let ramDollar = ram * 1.57;
    let ollRamDollar = ramDollar * ramNum;
    let cpuDollarDiscount = cpuDollar * discount; 
    let totalCpuDollar = cpuDollar - cpuDollarDiscount;
    let videoCardDollarDiscount = videoCardDollar * discount;
    let totalVideoCardDollar = videoCardDollar - videoCardDollarDiscount;
    let total = totalVideoCardDollar + totalCpuDollar + ollRamDollar;
    console.log("Money needed - " + total.toFixed(2) + " leva.");
}
