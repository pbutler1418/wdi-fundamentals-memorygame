
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
}
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
}
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
}
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
] ;
const cardsInPlay = [];

function checkForMatch 
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
}
else
	console.log("sorry, try again.");


function flipCard(cardID) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId].rank)
}

function createBoard
	for (let i = 0; i < arrayName.length; i++) {
}