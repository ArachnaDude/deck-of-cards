class Deck {
  constructor() {
    this.deckOfCards = [];

    const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    const cards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        this.deckOfCards.push(`${cards[j]} of ${suits[i]}`);
      }
    }
  }

  // methods

  // returns a deck of cards in ace to king, hearts clubs diamonds spades order
  factoryDeck() {
    return this.deckOfCards;
  }

  // returns a randomly shuffled deck of cards
  // shuffling uses the Fisher-Yates sorting algorithm
  shuffle() {
    const { deckOfCards } = this;
    for (let i = deckOfCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deckOfCards[i], deckOfCards[j]] = [deckOfCards[j], deckOfCards[i]];
    }
    return deckOfCards;
  }
}
const cards = new Deck();
console.log(cards.shuffle());
// cards.shuffle();
