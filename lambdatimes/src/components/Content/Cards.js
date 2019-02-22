import React, { Component } from "react";
import Card from "./Card";
// props: cards={this.filterCards()}
const Cards = props => {
  // I like to keep my JavaScript out of my JSX because I, personally, find it easier to read
  let cards = props.cards.map(card => <Card key={card.headline} card={card} />);
  if (!cards) {
    cards = "No cards to display";
  }
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
      {cards}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;
