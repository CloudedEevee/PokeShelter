import React, { useEffect, useState } from "react";
import Btn from "../general/Btn";
import axios from "axios";

const PartyCard = (props) => {
    const {
        btnAction,
        setBtnAction,
        pokeParty,
        setPokeParty,
    } = props;

    useEffect(() => {
        let action = "Release";
        setBtnAction(action);
    }, []);

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
            { pokeParty.map(
                <div className="partyCard">
                    <h3>{onePokemon.name.charAt(0).toUpperCase()}</h3>
                    <h4>{onePokemon.nickname.charAt(0).toUpperCase()}</h4>
                    <Btn btnAction={btnAction} onSubProp={releasePoke(onePokemon._id)} />
                </div>
            )}
        </>
        );
    };
    
    export default PartyCard;