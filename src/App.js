import React, {Component} from 'react';
// import {Router} from 'react-router';
// import { Route, Link } from 'react-router-dom';
import Pokemon from "./Pokemon"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: false,
    }
  }
 
  
  searchPokemon = (pokemon) => {
    console.log('hey we are search',  pokemon);
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        name: data.name,
        image: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        xp: data.base_experience,
        weight: data.weight,
        height: data.height,
        types: data.types,
        search: true,
      })
    } )
  }

  handlePokemon = (e) => {
    this.setState({ value: e.target.value })
  }

  render (){
    console.log(this.state);
  return (
    <div className="App">
        <h1>Please type in your favorite Pokemon</h1>
      <div className="search-container">
        <input
          className="search"
          id="input"
          type="text"
          placeholder="Search name"
          onChange={this.handlePokemon}
        />
        <button className="submit" type="submit" onClick={() => this.searchPokemon(this.state.value)}>submit</button>
      </div>
      {
        this.state.search === false
        ? null
        : <Pokemon pokemon={this.state } /> 
      }
    </div>
  );
}
}

export default App;
