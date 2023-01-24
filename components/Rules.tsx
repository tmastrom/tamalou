import * as React from 'react';

export default function RulesCard() {
  return (
    <>
      <div>How to play</div>
      <p>
      deal 4 cards to each player face down <br/>
      players can look at the two cards on the edge only once before the game starts  <br/>
      burn one card off the top of the deck <br/>
      player to the left of the dealer starts by picking a card off the top of the deck  <br/>
      they can replace one of their cards or discard the card  <br/>
      if a jack is played, draw again  <br/>
      if a queen is played, you can blindly swap cards with another player <br/>
      if a king is played, you can look at one of your own cards<br/>
      if someone discards into the middle and you have one of those cards, you can stack it and get rid of one of your cards  <br/>
      only one matching card can be stacked, subsequent stacks mean you draw a card <br/>
      you can also stack an opponents card, if you are successful you give one of your cards to the play whose card you stacked <br/>
      unsuccessful stacks mean you must draw a card <br/>
      if you're wrong and they do not match, you take another card and add it to your hand  <br/>
      if you have 5 points in your hand or lower, you can call "tamalou", <br/>
      the rest of the players play one more round <br/>
      during the last round, you can only swap with the calling player by using a King <br/>
      the round is over and players show their cards 
      </p>

      <div>Scoring</div>
      <p>
        Point Value <br/>
        A-9: 1-9 <br/>
        Face cards: 10 <br/>
      </p>
      <p>
      player calls and has lowest hand = -10 <br/>
      player calls and doesn't have lowest hand - hand value +10 <br/>
      any other player - face value of cards <br/>
      play until loser gets to 50 or winner gets to -50
      </p>

      <div>Edge Cases</div>
      <p>
        You cannot pick up the initial burned card <br/>
        You cannot play a matching card onto the initial burned card <br/>
        only one player can play a matching card <br/>
      </p>
    </>
  );
}
