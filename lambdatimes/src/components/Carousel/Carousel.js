import React, { Component } from 'react';
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
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        <img src={this.state.images[this.state.currentIndex]} style={{ display: 'block' }} />
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
