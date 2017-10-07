import React from 'react';
import GifList from './GifList';
import SearchBar from './SearchBar';

// class component
class GifFinder extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      gifs: []
    }
    
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let query = event.target.value;
    this.setState({query});
  }

  handleSubmit(event) {
    event.preventDefault();
    let query = this.state.query;
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&limit=12`, {
      method: 'GET'
    })
    .then((res) => {
      res.json()
      .then((data) => {
        let gifs = data.data;
        this.setState({gifs});
      });
    })
    .catch((err) => {
      console.log(err, 'Error in request');
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm text-center" style={{"marginBottom":"10px"}}>
            <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
        </div>
        <hr />
        <GifList gifs={this.state.gifs} alt={this.state.query} />
      </div>
    );
  }
}

export default GifFinder;
