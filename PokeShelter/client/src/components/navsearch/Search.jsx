import React, { useState } from 'react';
import axios from 'axios';

const Search = (props) => {
  const { pokemonCard, setPokemonCard } = props;
  const [pokeSearch, setPokeSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (pokeSearch.length < 3) {
      setErrorMessage('Must be at least 3 characters.');
      return;
    }

    setErrorMessage('');

    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokeSearch}`)
      .then((res) => {
        console.log(res.data.name);
        let findFlavor = res.data.flavor_text_entries;
        let enIndex;
        findFlavor.forEach((thisFlavor, i) => {
          if (thisFlavor.language.name === 'en') {
            enIndex = i;
          }
        });
        let enFlavor = findFlavor[enIndex];
        setPokemonCard({
          name: res.data.name,
          dex: res.data.pokedex_numbers[0].entry_number,
          flavor: enFlavor,
        });
      })
      .catch((err) => {
        console.log('Something went wrong:', err);
        setErrorMessage('Pokemon not found. Please try again.');
      });

    getSprite();
  };

  const getSprite = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`)
      .then((res) => {
        console.log(res.data.name);
        setPokemonCard((prevPokeCard) => ({
          ...prevPokeCard,
          sprite: res.data.sprites.front_default,
          type: res.data.types[0].type.name,
        }));
      })
      .catch((err) => {
        console.log('Something went wrong:', err);
      });
  };

  return (
    <form onSubmit={submitHandler} id="poke-form">
      <div className="input-wrapper">
        <input
          type="text"
          name="pokeSearch"
          placeholder="Find your partner. . ."
          onChange={(e) => setPokeSearch(e.target.value)}
        />
        <input type="submit" value="Search" />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default Search;