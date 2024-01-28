import React from 'react';
import Icon from '../icon';
import Btn from '../btn';


const DetailPage = (props) => {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "3rem"}}>
            <Icon/>
            <p style={{margin: "1rem"}}>Nickname</p>
            <p style={{margin: "1rem"}}>Pokename</p>
            <p style={{margin: "1rem"}}>Pokedex Number</p>
            <p style={{margin: "1rem"}}>Latest Gen Flavor Text</p>
            <Btn/>
        </div>
    )
}

export default DetailPage