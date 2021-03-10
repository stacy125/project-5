import React, { Component } from "react";
import './Pokemon.css'

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {...props},
      value: ""
    };
  }

  

  render() {
    console.log(this.props);
    return (
      <div>
        <header>SEARCH FOR YOUR POKEMON</header>
        <div className="flex-container">
          <div className="image-container">
            <img id="update-img" src={this.props.pokemon.image} alt="pokemon" />
          </div>
          <div className="displayPokemon">
            <div className="title-container">
              <h3 className="name text-center" id="update-name">
                {this.props.pokemon.name}
              </h3>
              <hr className="separator" />
              <div className="stats text-center">
                <span className="first hp" id="update-hp">
                  HP {this.props.pokemon.hp}
                </span>
                <span className="xp" id="update-xp">
                  XP {this.props.pokemon.xp}
                </span>
              </div>
              <div className="button-container">
                <button className="btn-transfer">TRANSFER</button>
              </div>
              <div className="attribute-container">
                <div className="attribute-content">
                  <small className="text-muted">Type</small>
                  {
                    this.props.pokemon.types.length === 2
                    ? 
                    <p className="atributes" id="update-attributes">{this.props.pokemon.types[0].type.name} / {this.props.pokemon.types[1].type.name}</p> 
                    :
                    <p className="atributes" id="update-attributes">{this.props.pokemon.types[0].type.name}</p>
                  }
                </div>
                <div className="attribute-content">
                  <small className="text-muted">Weight </small>
                  <p className="weight" id="update-weight">{this.props.pokemon.weight}kg</p>
                </div>
                <div className="attribute-content">
                  <small className="text-muted">Height</small>
                  <p className="height" id="update-height">{this.props.pokemon.height} cm</p>
                </div>
              </div>
            </div>
          </div> {/*display poke */}
        </div> {/*flex con */}
      </div> /* outer most div*/
    );
  }
}

export default Pokemon;
