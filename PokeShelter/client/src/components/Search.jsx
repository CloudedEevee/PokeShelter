import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
import axios from 'axios'

const Search = (props) => {

    const {pokemonCard, setPokemonCard} = props
    let log = console.log.bind(console)
    log( "SEARCH PROPS:", pokemonCard, setPokemonCard);

    const [pokeName, setPokeName] = useState("");

    const changeHandler = (e) => {
        console.log(e)
        setPokeName({[e.target.name]:e.target.value})
    };

    const submitHandler = (e) => {
        e.preventDefault()
        axios
            .get(`https://pokeapid.co/api/vs/pokemon/${pokeName.pokeSearch}`)
            .then((res) => {
                console.log(res.data.name)
                setPokemonCard([...pokemonCard, {
                    'name': res.data.name,
                    'sprite': res.data.sprites.front_default,
                    'type': res.data.types.type.name,
                    'dex': res.data.pokedex_numbers[0].entry_number,
                    'flavor': res.data.flavor_text_entries[0].flavor_text,
                }])
            })
            .catch((err) => {
                console.log("Something went wrong:", err)
            })
        setPokemonCard([...pokemonCard, pokeName])
    };

    return (
        <form onSubmit={submitHandler} id="poke-form">
            <div className="input-wrapper">
                <FaSearch id="search-icon"/>
                <input type="text" name="pokeSearch" placeholder="Find your partner. . ."  onChange={changeHandler}/>
                <input type="submit" value="Search" />
            </div>
        </form>
    );
};

export default Search