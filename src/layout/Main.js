import React from 'react'
import Movies from '../components/Movies'

export default class Main extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=fedb0abd&s=panda")
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render() {
    return (
      <div className="container content">
        {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <h3>Loading...</h3>}
        
      </div>
    )
  }
}