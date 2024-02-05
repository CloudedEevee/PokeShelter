import React, { useEffect } from "react";
import ResultCard from "../resultcards/resultcard";
import Nav from "../navsearch/Nav";
import Search from "../navsearch/Search";
import axios from "axios";
import PartyCard from "../partycards/PartyCard";

const Main = (props) => {
    const {pokemonCard, setPokemonCard, btnAction, setBtnAction, pokeParty, setPokeParty} = props;
    // useEffect should find pokeParty (list) to load party on Main page

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pokemon')
            .then(res => {
                console.log(res.data);
                setPokeParty(res.data);
            })
    }, [])

    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <Nav />
            <Search 
                pokemonCard={pokemonCard}
                setPokemonCard={setPokemonCard}
                />
            <ResultCard
                pokeParty={pokeParty}
                setPokeParty={setPokeParty}
                pokemonCard={pokemonCard}
                setPokemonCard={setPokemonCard}
                btnAction={btnAction}
                setBtnAction={setBtnAction}
                />
            <PartyCard
                pokeParty={pokeParty}
                setPokeParty={setPokeParty}
            />
        </div>

    )

}

export default Main;