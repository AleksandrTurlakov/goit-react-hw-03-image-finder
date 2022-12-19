import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleDownEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDownEscape);
  }

  handleDownEscape = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) this.props.onClose();
  };

  render() {
    return createPortal(
      <div onClick={this.handleBackdropClick}>
        <div>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
