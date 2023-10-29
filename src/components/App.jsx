import { Component } from 'react';
import { nanoid } from 'nanoid';
import { fetchImeges } from 'api';
import { ImegeGallery } from './ImegeGallery/ImegeGallery';
import { AddButton } from './AddButton/AddButton';
import { SearchForm } from './SearchForm/SearchForm';

export class App extends Component {
  state = {
    imeges: [],
    loader: false,
    error: false,
    page: 1,
    search: '',
    mounted: true,
  }

  async componentDidMount() {
    try {
      const page = 1;

      this.setState({ loading: true, error: false });

      const newImeges = await fetchImeges(page);

      this.setState(prevState => ({
        imeges: [...newImeges.hits],
        page: 2,
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false, mounted: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {

  }

  changeSearch = async value => {
    console.log(value);
    if (value !== this.state.search) {
      try {
        const search = value;
        const page = 1;
        this.setState({ loading: true, error: false });

        const newImeges = await fetchImeges(search, page);

        this.setState(prevState => ({
          imeges: [...newImeges.hits],
          page: 2,
          search: value,
        }));
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false, mounted: false });
      }
    }

  }

  addImeges = async () => {
    try {
      const { search, page } = this.state;

      this.setState({ loading: true, error: false });

      const newImeges = await fetchImeges(search, page);

      this.setState(prevState => ({
        imeges: [...prevState.imeges, ...newImeges.hits],
        page: page + 1,
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false, mounted: false });
    }
  }

  render() {
    const { imeges, loader } = this.state;
    return (
      <>
        <SearchForm onChangeSerch={this.changeSearch}></SearchForm>
        {imeges.length > 0 && (
          <ImegeGallery imeges={imeges}></ImegeGallery>)}
        {/* {loader && (
          <Loader></Loader>)} */}
        {(!loader || imeges.length > 0) && (
          <AddButton onAddImeges={this.addImeges}></AddButton>)}
      </>
    );
  }
}
