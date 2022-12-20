import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';
import {
  HeaderForm,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

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
      toast.error('Enter text in the search bar! 👀');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <HeaderForm>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <FcSearch />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleimageNameChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
        <Toaster />
      </HeaderForm>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
