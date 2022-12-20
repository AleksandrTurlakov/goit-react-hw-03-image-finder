import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../Svg/icon-bold-arrow-up.svg';
import { Searchbar } from '../Searchbar/Searchbar';
import { getImages } from '../../services/api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { LoadMore } from '../LoadMore/LoadMore';
import { Loader } from '../Loader/Loader';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    imageGallery: [],
    imageName: '',
    page: 1,
    isLoading: false,
    totalHits: 0,
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
          imageGallery: [...prevState.imageGallery, ...imageGallery.hits],
        }));
        this.setState({ totalHits: imageGallery.totalHits });
        if (imageGallery.totalHits === 0)
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
      } catch {
        toast.error('Something went wrong, please try again! 🤷‍♂️🤷‍♀️🤷‍♂️');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

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

  render() {
    const { isLoading, imageGallery, page } = this.state;
    const totalPage = imageGallery.length / this.state.totalHits;
    return (
      <Container>
        <Searchbar onSubmit={this.addImage} />
        <GlobalStyle />
        <ImageGallery items={imageGallery} />
        {isLoading && <Loader />}
        {imageGallery.length !== 0 && totalPage !== 1 && page < 42 && (
          <LoadMore onClick={this.loadMore} />
        )}
        <Toaster
          toastOptions={{
            style: {
              background: '#f8c1c1',
              color: '#fff',
              textAlign: 'center',
            },
          }}
        />
        <ScrollToTop smooth component={<MySVG style={{ display: 'flex' }} />} />
      </Container>
    );
  }
}
