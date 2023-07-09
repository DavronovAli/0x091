import React from "react";

export default class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovie(this.state.search)
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              type="search"
              id="email_inline"
              placeholder="Search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyDown={this.handleKey}
            />
            <button className="btn search-btn" onClick={() => {this.props.searchMovie(this.state.search)}}>
              Search Movies
            </button>
          </div>
        </div>
      </div>
    );
  }
}
