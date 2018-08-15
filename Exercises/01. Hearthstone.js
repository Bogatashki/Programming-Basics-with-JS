function Hearthstone ([timeBreak, cards, adventure, coffePrice]){
    timeBreak = Number(timeBreak);
    cards = Number(cards);
    adventure = Number(adventure);
    coffePrice = Number(coffePrice);
    let Break = timeBreak - 5;
    let anotherTime = 3*2;
    let adventureCards = 2*2;
    let relaxTime = Break- (anotherTime+adventureCards);
    let MoneyCards = 3 * cards;
    let moneyAdventure = 2 * adventure;
    let allMoney = coffePrice + moneyAdventure + MoneyCards;
    console.log(allMoney.toFixed(2));
    console.log(relaxTime);
}
