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

    const releasePoke = () => {

    }

    return (
        <>
            { pokeParty.map(
                <div className="partyCard">
                    <div className="resTop">

                    </div>
                    <Btn btnAction={btnAction} onSubProp={releasePoke} />
                </div>
            )}
        </>
        );
    };
    
    export default PartyCard;