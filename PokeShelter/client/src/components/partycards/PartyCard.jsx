import React, { useEffect, useState } from "react";
import Btn from "../general/Btn";
import axios from "axios";

const PartyCard = (props) => {
    const {
        pokemonCard,
        setPokemonCard,
        btnAction,
        setBtnAction,
        pokeParty,
        setPokeParty,
    } = props;
    const [nickname, setNickname] = useState("");

    useEffect(() => {
        let action = "Add to Party";
        setBtnAction(action);
    }, []);

    return (
        <>
            {pokemonCard.dex ? (
                <div className="partyCard">
                    <div className="resTop">
                        pokemonCard={pokemonCard}
                        nickname={nickname}
                        setNickname={setNickname}
                        />
                    </div>
                    <Btn btnAction={btnAction} onSubProp={removeFromParty} />
            </div>
            ) : null}
        </>
        );
    };
    
    export default PartyCard;