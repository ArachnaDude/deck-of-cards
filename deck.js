class Deck {
  constructor() {
    this.deckOfCards = [];
    this.jokers = false;
    this.factoryDeck();
    this.shuffle();
  }

  // methods

  // resets this.deckOfCards into Ace - King, H, C, D, S order
  factoryDeck() {
    this.deckOfCards = [];

    const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.deckOfCards.push(`${ranks[j]} of ${suits[i]}`);
      }
    }
    if (this.jokers) {
      this.deckOfCards.push("Red Joker", "Black Joker");
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

  // inverts this.jokers,
  toggleJokers() {
    this.jokers = !this.jokers;
    let toggleAlert = this.jokers ? "on" : "off";
    console.log(`Jokers have been turned ${toggleAlert}, dealing new deck.`);
    this.factoryDeck();
    this.shuffle();
  }
}

const cards = new Deck();
