import React, { useState } from "react"; 
import InputField from "./InputField";

const Quicklook = (props) => {
    const {pokemonCard, nickname, setNickname} = props;

    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ paddingLeft: "1rem" }}>
            <p style={{ margin: ".2rem", fontSize: "20pt" }}>{pokemonCard.name}</p>
            <InputField 
                nickname={nickname}
                setNickname={setNickname}
                />
        </div>
    )
}


export default Quicklook;