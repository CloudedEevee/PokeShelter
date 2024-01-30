import React from 'react';
import { useState } from "react";
import axios from 'axios'

const Search = (props) => {

    const {pokemonCard, setPokemonCard} = props
    let log = console.log.bind(console)
    log( "SEARCH PROPS:", pokemonCard, setPokemonCard);

    const [pokeName, setPokeName] = useState("");

    const changeHandler = function (e) {
        setPokeName({ [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault()
        axios
            .get(`https://pokeapi.co/api/v2/pokemon-species/${pokeSearch}`)
            .then((res) => {
                console.log(res.data.name)
                ////////////////////////////// FIND FLAVOR TEXT IN ALL GENS
                let findFlavor = res.data.flavor_text_entries; // find the list of flavor text entries in all languages
                let enIndex; // create variable to store index of english flavor text
                findFlavor.map( (thisFlavor, i) => {
                    if (thisFlavor.language.name == "en") {
                        enIndex = i; // set proper english index
                    }
                })
                let enFlavor = findFlavor[enIndex]; // set temp english flavor text variable to assign to setPokemonCard
                ////////////////////////////// SET RESULTS
                setPokemonCard([{
                    'name': res.data.name,
                    'dex': res.data.pokedex_numbers[0].entry_number,
                    'flavor': enFlavor
                }])
            })
            .catch((err) => {
                console.log("Something went wrong:", err)
            })
            getSprite();
        };
        
        const getSprite = () => {
            axios            
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`)
            .then((res) => {
                console.log(res.data.name)
                setPokemonCard((prevPokeCard) => [...prevPokeCard[0], {
                    'sprite': res.data.sprites.front_default,
                    'type': res.data.types[0].type.name,
                }])
            })
            .catch((err) => {
                console.log("Something went wrong:", err)
            })
    }

    return (
        <form onSubmit={submitHandler} id="poke-form">
            <div className="input-wrapper">
                <input type="text" name="pokeSearch" placeholder="Find your partner. . ."  onChange={changeHandler}/>
                <input type="submit" value="Search" />
            </div>
        </form>
    );
};

export default Search;