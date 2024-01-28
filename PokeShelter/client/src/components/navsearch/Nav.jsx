import React from 'react'

const Nav = () => {

    return (
        <nav style={{display: "flex", flexDirection: "column", alignItems: "center", margin: ".5rem"}}>
            <h1 style={{color: "yellow", textShadowColor: "blue", textShadowRadius: 3,}}>PokeShelter</h1>
            <h5>Ever wonder what happened to those Daycare eggs?...</h5>
        </nav>
    )
}

export default Nav;