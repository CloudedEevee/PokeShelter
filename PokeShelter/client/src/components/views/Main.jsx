import React from "react";
import ResultCard from "../resultcards/resultcard";
import Nav from "../navsearch/Nav";
import Search from "../navsearch/Search";

const Main = (props) => {


    //////////////////////////////////////////////////////////// Return
    return (
        <div style={{ display: "flex", flexDirection: "column", flexDirection: "column"}}>
            <Nav />
            <Search />
            <ResultCard />
        </div>

    )

}


export default Main;


// remove flexDirection