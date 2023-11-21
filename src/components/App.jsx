import Button from './Button';
import ImageGallery from './ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import React, { Component } from 'react';
import { getImages } from './api';

export class App extends Component {
  state = {
    target: '',
    data: [],
    totalPages: 0,
    page: 1,
    isLoading: false,
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
      try {
        this.setState({
          isLoading: true,
        });
        const res = await getImages(this.state.target, this.state.page);
        const { hits } = res;
        this.setState({
          data: hits,
        });
      } catch {
        toast.error('Error! Try again!');
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }
  toggleLoader = () => {
    this.setState(prevState => {
      return {
        isLoading: !prevState.isLoading,
      };
    });
  };
  render() {
    const { target, data, totalPages, page, isLoading } = this.state;
    return (
      <>
        <SearchBar
          onSubmitData={this.onSubmitData}
          page={page}
          onNewSearch={this.onNewSearch}
          toggleLoader={this.toggleLoader}
        />
        {isLoading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{
              display: 'block',
              margin: '0 auto',
            }}
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        ) : (
          <ImageGallery target={target} data={data} />
        )}
        {totalPages > 1 && <Button onLoadMore={this.onLoadMore} />}
        <Toaster position="top-right" />;
      </>
    );
  }
}
