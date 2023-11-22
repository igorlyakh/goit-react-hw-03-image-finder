import React, { Component } from 'react';
import Modal from 'react-modal';
import { Image, Item } from './ImageGalleryItem.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  render() {
    const { photo, alt, bigImg } = this.props;
    const { isModalOpen } = this.state;
    return (
      <Item>
        <Image src={photo} alt={alt} onClick={this.openModal} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Gallery item"
        >
          <img src={bigImg} alt={alt} />
        </Modal>
      </Item>
    );
  }
}
