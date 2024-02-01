import React, { useEffect, useState } from "react";
import axios from "axios";

const PartyCard = (props) => {
    const {
        pokeParty,
        setPokeParty,
    } = props;

    const releasePoke = (idFromMap) => {
        axios.delete(`http://localhost:8000/api/pokemon/${idFromMap}`)
        .then((res) => {
            console.log("Released Pokemon:", res)
            const newPokeParty = pokeParty.filter((allOtherPokemon) => allOtherPokemon._id !== idFromMap)
            setPokeParty(newPokeParty)
        })
        .catch((err) => {
            console.log("Something went wrong: ", err)
        })
    }

    return (
        <>
            { 
                pokeParty.map((onePokemon, i) => (
                    <div className="partyCard" key="i">
                        <img src={onePokemon.sprite} alt={onePokemon.name} />
                        <h3>{onePokemon.name.charAt(0).toUpperCase() + onePokemon.name.slice(1)}</h3>
                        <h4>{onePokemon.nickname}</h4>
                        <button className='red-btn' onClick={() => releasePoke(onePokemon._id)}>Release</button>
                    </div>
                ))
            }
        </>
        );
    };
    
    export default PartyCard;