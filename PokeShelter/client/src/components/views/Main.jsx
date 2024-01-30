import React from "react";
import ResultCard from "../resultcards/resultcard";
import Nav from "../navsearch/Nav";
import Search from "../navsearch/Search";

const Main = (props) => {
    const {pokemonCard, setPokemonCard, btnAction, setBtnAction, pokeParty, setPokeParty} = props;
    // useEffect should find pokeParty (list) to load party on Main page


    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ display: "flex", flexDirection: "column", flexDirection: "column"}}>
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
        </div>

    )

}


export default Main;

