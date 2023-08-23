class Deck {
  constructor() {
    this.deckOfCards = [];

    const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    const cardValues = [
      "Ace",
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      "Jack",
      "Queen",
      "King",
    ];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < cardValues.length; j++) {
        this.deckOfCards.push(`${cardValues[j]} of ${suits[i]}`);
      }
    }

    // console logs a deck of cards in factory order
    this.brandNewDeck = function () {
      console.log(this.deckOfCards);
    };
  }
}
cards = new Deck();
cards.brandNewDeck();
