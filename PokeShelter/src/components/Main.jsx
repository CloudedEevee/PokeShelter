import React from "react";
import ResultCard from "./resultcards/resultcard";

const Main = (props) => {


    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ display: "flex" }}>
            <ResultCard />
            <ResultCard />
            <ResultCard />
        </div>

    )

}


export default Main;