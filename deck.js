function Deck() {
  const deckOfCards = [];
  const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  const cards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

  for (let suit in suits) {
    for (let card in cards) {
      deckOfCards.push(`${cards[card]} of ${suits[suit]}`);
    }
  }
  console.log(deckOfCards);
}
Deck();
