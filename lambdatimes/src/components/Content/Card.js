import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => (
  <div className="card">
    <div className="headline">{card.headline}</div>
    <div className="author">
      <div className="img-container">
        <img src={card.img} />
      </div>
      <span>By {card.author}</span>
    </div>
  </div>
);

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
