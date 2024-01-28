import React from 'react'

const Nav = () => {

    return (
        <nav style={{display: "flex", flexDirection: "column", alignItems: "center", margin: ".5rem"}}>
            <h1 className="rest" style={{color: "brown", textShadow: "2px 2px 2px black"}}>PokeShelter</h1>
            <h5 className="rest" style={{marginTop: "5px"}}>Ever wonder what happened to those Daycare eggs?...</h5>
        </nav>
    )
}

export default Nav