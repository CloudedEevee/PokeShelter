import React from "react";
import InputField from "./InputField";

const Quicklook = (props) => {


    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ paddingLeft: "1rem" }}>
            <p style={{ margin: ".2rem", fontSize: "20pt" }}>Pokename</p>
            <InputField />
        </div>
    )
}


export default Quicklook;