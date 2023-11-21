import Button from './Button';
import ImageGallery from './ImageGallery';
import SearchBar from './SearchBar/SearchBar';

import React, { Component } from 'react';
import { getImages } from './api';

export class App extends Component {
  state = {
    target: '',
    data: [],
    totalPages: 0,
    page: 1,
  };

  onSubmitData = (newTarget, newData, newTotal) => {
    this.setState({
      target: newTarget,
      data: newData,
      totalPages: newTotal,
    });
  };
  onNewSearch = () => {
    this.setState({
      page: 1,
    });
  };
  onLoadMore = async () => {
    this.setState(prevState => {
      return {
        page: (prevState.page += 1),
      };
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      const res = await getImages(this.state.target, this.state.page);
      const { hits } = res;
      this.setState({
        data: hits,
      });
    }
  }
  render() {
    const { target, data, totalPages, page } = this.state;
    return (
      <>
        <SearchBar
          onSubmitData={this.onSubmitData}
          page={page}
          onNewSearch={this.onNewSearch}
        />
        <ImageGallery target={target} data={data} />
        {totalPages > 0 && <Button onLoadMore={this.onLoadMore} />}
      </>
    );
  }
}
