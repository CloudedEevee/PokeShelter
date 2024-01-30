import React from "react";
import ResultCard from "../resultcards/resultcard";
import Nav from "../navsearch/Nav";
import Search from "../navsearch/Search";

const Main = (props) => {
    const {pokemonCard, setPokemonCard, btnAction, setBtnAction, onSubProp, setOnSubProp} = props;

    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ display: "flex", flexDirection: "column", flexDirection: "column"}}>
            <Nav />
            <Search 
                pokemonCard={pokemonCard}
                setPokemonCard={setPokemonCard}
                />
            <ResultCard
                pokemonCard={pokemonCard}
                setPokemonCard={setPokemonCard}
                btnAction={btnAction}
                setBtnAction={setBtnAction}
                onSubProp={onSubProp}
                setOnSubProp={setOnSubProp}
                />
        </div>

    )

}


export default Main;

