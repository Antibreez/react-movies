import React, { Component } from 'react';
import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {Main} from './layout/Main';
import {Movies} from './components/Movies/Movies';
import Filters from './components/Filters/Filters';
import { Preloader } from './components/Preloader/Preloader';
import { Search } from './components/Search/Search';
import Pagination from './components/Pagination/Pagination';
import { connect } from 'react-redux';
import { setCurrentGroupAction, setCurrentPageAction, setMoviesAction, setPagesAction } from './redux/actions/paginationAction';
 
class App extends Component {
  state = {
    search: '',
    notFound: false,
    startScreen: true,
  }

  changeMovies = (value) => {
    this.props.setMovies([]);
    this.state.startScreen && this.setState({startScreen: false});

    fetch(`https://www.omdbapi.com/?s=${value}&apikey=8f5ef419`)
      .then(response => response.json())
      .then(data => {
        this.props.setCurrentPage(1)
        this.props.setCurrentGroup(0)

        if (data.Error === 'Movie not found!') {
          this.setState({notFound: true});
          return
        } else {
          this.setState({notFound: false})
        }

        this.props.setMovies(data.Search);

        this.props.setPages(Math.ceil(data.totalResults / 10))

        this.setState({search: value})
        
      }).catch(e => console.log(e))
  }

  changePage = (page) => {
    this.props.setMovies([]);

    fetch(`https://www.omdbapi.com/?s=${this.state.search}&page=${page}&apikey=8f5ef419`)
      .then(response => response.json())
      .then(data => {

        this.props.setMovies(data.Search);

        this.props.setPages(Math.ceil(data.totalResults / 10))
        
      }).catch(e => console.log(e))
  }

  changeFilter = (filter) => {
    this.props.setMovies([]);

    const filterParam = filter === 'all' ? '' : filter;

    fetch(`https://www.omdbapi.com/?s=${this.state.search}&type=${filterParam}&apikey=8f5ef419`)
      .then(response => response.json())
      .then(data => {
        this.props.setCurrentPage(1)
        this.props.setCurrentGroup(0)

        if (data.Error === 'Movie not found!') {
          this.setState({notFound: true});
          return
        } else {
          this.setState({notFound: false})
        }

        this.props.setMovies(data.Search);

        this.props.setPages(Math.ceil(data.totalResults / 10))
        
      }).catch(e => console.log(e))
  }

  render() {
    const {movies} = this.props;
    const {notFound, startScreen} = this.state;

    return (
      <>
        <Header/>
        <Main>
          <Search onSearch={this.changeMovies}/>
          {
            startScreen
              ? null
              : <Filters onFilterChange={this.changeFilter}/>
          }

          { 
            startScreen
              ? <h4>Search movie!</h4>
              : movies && movies.length
              ? <>
                <Movies movies={movies}/>
                <Pagination 
                  changePage={this.changePage}
                />
              </> 
              : notFound
              ? <h3>Nothing founded!</h3>
              : <Preloader/>
          }

        </Main>
        <Footer/>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.pagination.movies,
    currentPage: state.pagination.currentPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPages: value => dispatch(setPagesAction(value)),
    setMovies: value => dispatch(setMoviesAction(value)),
    setCurrentPage: value => dispatch(setCurrentPageAction(value)),
    setCurrentGroup: value => dispatch(setCurrentGroupAction(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)