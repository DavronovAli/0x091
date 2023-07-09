import React from 'react'
import Movies from '../components/Movies'
import Loader from '../components/Loader'
import Search from '../components/Search'
export default class Main extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=fedb0abd&s=universe")
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  searchMovies = (str) => {
    fetch(`https://www.omdbapi.com/?apikey=fedb0abd&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    return (
      <div className="container content">
        <Search searchMovie={this.searchMovies} />
        {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <Loader />}
      </div>
    )
  }
}