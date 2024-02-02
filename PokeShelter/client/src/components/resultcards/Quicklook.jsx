import React, { useEffect, useState } from "react"; 
import InputField from "../general/InputField";

const Quicklook = (props) => {
    const {pokemonCard, nickname, setNickname} = props;
    
    const [pokeName, setPokeName] = useState("");
    useEffect(() => {
        setPokeName(betterName(pokemonCard.name));
            let log = console.log.bind(console);
            log( "SEARCH RESULTS:", pokemonCard);
        }, [])

        const betterName = (pokeName) => {
            let tempName = "";
            const nameArr = pokeName.split('');
            nameArr.map((char, i) => {
                if (i == 0) {
                    tempName += char.toUpperCase();
                }
                else {
                    tempName += char;
                }
            })
            return tempName;
            
        } 

    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ paddingLeft: "1rem" }}>
            <p style={{ margin: ".2rem", fontSize: "20pt" }}>{pokeName}</p>
            <InputField 
                nickname={nickname}
                setNickname={setNickname}
                />
        </div>
    )
}


export default Quicklook;