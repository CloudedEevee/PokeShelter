import React from "react";
import Icon from "../general/Icon";
import Quicklook from "./quicklook";
import PokeballIcon from "../general/PokeballIcon";

const ResultCard = (props) => {


    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "row", margin: ".5rem" }}>
                <PokeballIcon />
                <Quicklook />
            </div>
            <button style={{ padding: ".1rem 2rem", textAlign: "center", backgroundColor:"brown", boxShadow: "4px 4px black" }}>Add to Party</button>
            
        </div>
    )

}


export default ResultCard;