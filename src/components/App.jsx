import { Component } from 'react';
import { fetchImeges } from 'api';
import { Bars } from 'react-loader-spinner';
import { ImegeGallery } from './ImegeGallery/ImegeGallery';
import { AddButton } from './AddButton/AddButton';
import { Layout } from './Layout';
import { SearchForm } from './SearchForm/SearchForm';
import { ErrorMessage } from './ErrorMessage';

export class App extends Component {
  state = {
    imeges: [],
    loader: false,
    error: true,
    add: true,
    page: 1,
    search: '',
    mounted: true,
  }

  async componentDidMount() {
    try {
      const page = 1;

      this.setState({ loading: true, error: false });

      const newImeges = await fetchImeges(page);

      if (page * 12 >= newImeges.totalHits) {
        this.setState(() => ({
          add: false,
        }))
      }

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

        if (page * 12 >= newImeges.totalHits) {
          this.setState(() => ({
            add: false,
          }))
        } else {
          this.setState(() => ({
            add: true,
          }))
        }

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

      if (page * 12 >= newImeges.totalHits) {
        this.setState(() => ({
          add: false,
        }))
      }

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
    const { imeges, loader, error, add } = this.state;
    return (
      <Layout>
        <SearchForm onChangeSerch={this.changeSearch}></SearchForm>
        {imeges.length > 0 && (
          <ImegeGallery imeges={imeges}></ImegeGallery>)}
        {loader && (
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            visible={true}
          />)}
        {error && (
          <ErrorMessage> Whoops! Error! Please reload this page!</ErrorMessage>
        )
        }
        {!(loader || imeges.length === 0 || !add) && (
          <AddButton onAddImeges={this.addImeges}></AddButton>
        )
        }
        {(imeges.length === 0 || !add) && (
          <div> This is the last page</div>
        )
        }
      </Layout >
    );
  }
}
