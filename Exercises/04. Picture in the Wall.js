function PictureInTheWall ([holeWidth, holeHeight, pictureWidth, num]){
    holeWidth = Number(holeWidth);
    holeHeight = Number(holeHeight);
    pictureWidth = Number(pictureWidth);
    num = Number(num);
    let areaHole = holeWidth * holeHeight;
    let pictureArea = pictureWidth * pictureWidth;
    let allAreapictures = pictureArea * num;
    let difference = Math.max(areaHole, allAreapictures) - Math.min(areaHole, allAreapictures);
    if (allAreapictures > areaHole){
        console.log(`The pictures don't fit in the hole. Picture area is ${difference} bigger than hole area.`);
    }else{
        console.log(`The pictures fit in the hole. Hole area is ${difference} bigger than pictures area.`)
    }
}
