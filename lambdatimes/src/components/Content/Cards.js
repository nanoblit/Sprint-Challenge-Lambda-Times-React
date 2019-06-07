import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ cards }) => (
  <div className="cards-container">
    {cards.map((card, idx) => (
      <Card key={idx} card={card} />
    )) /* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop */}
  </div>
);

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};

Cards.defaultProps = {
  cards: [],
};

export default Cards;
