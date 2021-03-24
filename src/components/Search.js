import React, { Component } from "react";
import List from './List';


class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: [],
    }

  }
  /* DO NOT MODIFY */
  componentDidMount() {
    const allPlaces = [];
    const endpoint =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    fetch(endpoint)
      .then(data => data.json())
      .then(results => {
        allPlaces.push(...results)
        this.setState({ places: allPlaces })
      })
      .catch(error => console.log(error));
    }

    handleOnInputChange = (event) => {
      const query = event.target.value
      this.setState({ query })
      var regex = new RegExp("^" + query + "[a-z]*", "i");
      let results = this.state.places.filter(place => place.city.match(regex) || place.state.match(regex))
      results = results.map(place => place.city + " - " + place.state)
      this.setState({ results })
    };

    render(){
      const query = this.state.query
      const results = this.state.results
      console.log(this.props.places)
      return (
        <div className='Container'>
          <h2 className="heading"> Live Search City or State</h2>
          <label className="search-label" htmlFor="search-input"> 
            <input 
              type="text"
              value={query}
              id="search-input" 
              onChange={this.handleOnInputChange}
            >
            </input>
          </label>
        <List query={query} results={results} >
        </List>


        </div>

      )
    }


}


export default Search
