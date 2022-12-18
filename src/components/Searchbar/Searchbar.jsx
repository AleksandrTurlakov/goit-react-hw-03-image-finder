import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleimageNameChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
      alert('Введите текст в строке поиска');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <FcSearch />
            <span></span>
          </button>
          <input
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleimageNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
