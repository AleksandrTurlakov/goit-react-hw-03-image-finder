import { Component } from 'react';
import { Modal } from './Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  render() {
    const { item } = this.props;
    return (
      <div>
        <img src={item.webformatURL} alt={item.tags} onClick={this.openModal} />
        {this.state.showModal && (
          <Modal onClose={this.closeModal}>
            <div>
              <img src={item.largeImageURL} alt={item.tags} />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
