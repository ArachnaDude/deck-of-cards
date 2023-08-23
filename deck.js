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
  }

  // methods

  // returns a deck of cards in ace to king, hearts clubs diamonds spades order
  factoryDeck() {
    return this.deckOfCards;
  }

  shuffle() {}
}
const cards = new Deck();
console.log(cards.factoryDeck());
