
const cards = ["queen", "queen", "king", "king"] ;
const cardsInPlay = [];
let cardOne = cards[0]
cardsInPlay.push("cardOne");

let cardTwo = cards[2]
cardsInPlay.push("cardTwo")
console.log(cardsInPlay)

if cardsInPlay[0] === cardsInPlay[1]
	alert("You found a match!");
else
	alert("sorry, try again.")
