import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from '../services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    imageGallery: [],
    imageName: '',
    page: 1,
    isLoading: false,
  };

  addImage = imageName => {
    if (this.state.imageName !== imageName.trim()) {
      this.setState({ imageName, page: 1, imageGallery: [] });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });
        const imageGallery = await getImages(
          this.state.imageName,
          this.state.page
        );
        this.setState(prevState => ({
          imageGallery: [...prevState.imageGallery, ...imageGallery],
          isLoading: false,
        }));
      } catch (error) {}
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.addImage} />
        <ImageGallery items={this.state.imageGallery} />
        {this.state.isLoading && <Loader />}
        {this.state.imageGallery.length > 0 && (
          <LoadMore onClick={this.loadMore} />
        )}
      </div>
    );
  }
}
