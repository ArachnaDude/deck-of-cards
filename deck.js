class Deck {
  constructor() {
    this.deckOfCards = [];
    this.factoryDeck();
    this.shuffle();
  }

  // methods

  // resets this.deckOfCards into Ace - King, H, C, D, S order
  factoryDeck() {
    this.deckOfCards = [];

    const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    const cards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        this.deckOfCards.push(`${cards[j]} of ${suits[i]}`);
      }
    }
  }

  // Randomly shuffles this.deckOfCards
  // shuffling uses the Fisher-Yates sorting algorithm
  shuffle() {
    const { deckOfCards } = this;
    for (let i = deckOfCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deckOfCards[i], deckOfCards[j]] = [deckOfCards[j], deckOfCards[i]];
    }
  }

  // removes last element of deckOfCards and returns it.
  deal() {
    return this.deckOfCards.pop();
  }
}

const cards = new Deck();
