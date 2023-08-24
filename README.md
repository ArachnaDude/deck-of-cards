# DECK OF CARDS

A deck of 52 playing cards for use as a base for creating card games.

This project is created in JavaScript, and was designed to explore and increase my knowledge of OOP (Object Oriented Programming).

## Using the deck of cards

    $ const <your-variable-name-here> = new Deck();

Instantiates a new, randomly shuffled array, containing 52 cards by default. Access this array by adding:

    .deckOfCards

to your variable name.

## Methods

---

    .factoryDeck()

Resets the deck into a "factory new" deck of 52 cards. Cards are ordered Ace to King, and Hearts, Clubs, Diamonds, Spades.

---

    .shuffle()

Shuffles the deck randomly. Randomness is achieved with Fisher-Yates shuffling algorithm.

---

    .deal()

Returns and removes the "top card" (the last element of the deck of cards array). Note that this card remains gone until the desk is reset.

    .toggleJokers()

Toggles jokers on/off, prints current boolean status to console, and deals a new shuffled deck with jokers included/excluded.

### TODO

- Create the deck of cards - DONE
- Create a shuffle function that randomly re-orders the deck - DONE
- Create a draw card function that removes the card from the "top" of the deck - DONE
- Create a function that resets the deck to "factory new" order. - DONE
- Create "pick a card, any card" function that removes one random card from the deck
- Create a toggle to include/exclude jokers from the deck - DONE
