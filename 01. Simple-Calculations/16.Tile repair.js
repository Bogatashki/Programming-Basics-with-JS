function repairTile ([hPlace, hTile, wTile, hBench ,wBench]){
    let areaPlace = hPlace * hPlace;
    let areaBench = hBench * wBench;
    let place = areaPlace - areaBench;
    let areaTile = hTile * wTile;
    let tile = place / areaTile;
    let time = tile * 0.2;
    console.log(tile.toFixed(2));
    console.log(time.toFixed(2));
}
repairTile ([20, 5, 4, 1 ,2])
