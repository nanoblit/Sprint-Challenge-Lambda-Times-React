import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.setState({ images: carouselData });
  }

  leftClick = () => {
    this.setState(prevState => {
      let currentIndex = prevState.currentIndex + 1;
      if (currentIndex >= prevState.images.length) {
        currentIndex = 0;
      }
      return { currentIndex };
    });
  };

  rightClick = () => {
    this.setState(prevState => {
      let currentIndex = prevState.currentIndex - 1;
      if (currentIndex < 0) {
        currentIndex = prevState.images.length - 1;
      }
      return { currentIndex };
    });
  };

  render() {
    return (
      <div className="carousel" style={{ position: 'relative' }}>
        <div className="left-button" onClick={this.leftClick} style={{ zIndex: 1 }}>
          {'<'}
        </div>
        <ReactCSSTransitionGroup
          transitionName="carousel-transition"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          <img
            key={this.state.currentIndex}
            src={this.state.images[this.state.currentIndex]}
            style={{
              display: 'block',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              zIndex: 0,
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </ReactCSSTransitionGroup>
        <div className="right-button" onClick={this.rightClick} style={{ zIndex: 1 }}>
          {'>'}
        </div>
      </div>
    );
  }
}
