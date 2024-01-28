import React from "react";
import Icon from "../icon";
import Quicklook from "./quicklook";

const ResultCard = (props) => {


    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem" }}>
            <Icon />
            <Quicklook />
        </div>
    )

}


export default ResultCard;