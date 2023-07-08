import React from 'react'

export default class Main extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch("www.omdbapi.com/?apikey=fedb0abd&s=panda")
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render() {
    return (
      <div className="container content">
        All Content
      </div>
    )
  }
}