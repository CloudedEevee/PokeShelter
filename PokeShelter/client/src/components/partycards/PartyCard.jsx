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
        let action = "Remove From Party";
        setBtnAction(action);
    }, []);

    return (
        <>
            { pokeParty.map(
                <div className="partyCard">
                    <div className="resTop">
                        <img src={onePokemon.sprite} alt="{onePokemon.name} sprite"/>
                        <h4 style={{color: "brown"}}>{onePokemon.nickname}</h4>
                    </div>
                    <Btn btnAction={btnAction} onSubProp={releasePoke} />
                </div>
            )}
        </>
        );
    };
    
    export default PartyCard;