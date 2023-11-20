import ImageGallery from './ImageGallery';
import SearchBar from './SearchBar/SearchBar';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    target: '',
    data: [],
  };

  onSubmitData = (newTarget, newData) => {
    this.setState({
      target: newTarget,
      data: newData,
    });
  };
  render() {
    const { target, data } = this.state;
    return (
      <>
        <SearchBar onSubmitData={this.onSubmitData} />
        <ImageGallery target={target} data={data} />
      </>
    );
  }
}
