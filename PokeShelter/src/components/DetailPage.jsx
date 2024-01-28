import React from 'react';
import Icon from '../icon';
import Btn from '../btn';
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'


const DetailPage = (props) => {

    const { id } = useParams()

    const[onePokemon, setOnePokemon] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pokemon/${id}`)
        .then((res) => {
            console.log("One Pokemon", res.data)
            setOnePokemon(res.data)
        })
        .catch((err) => {
            console.log("Something went wrong: ", err)
        })
    }, [])

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "3rem"}}>
            <Icon/>
            <img style={{margin: "1rem"}} id="pokemon" src={card.sprite} alt="{card.name} sprite" />
            <h3 style={{margin: "1rem"}}>{onePokemon.nickname}</h3>
            <h4 style={{margin: "1rem"}}>{onePokemon.name}</h4>
            <h5 style={{margin: "1rem"}}>{onePokemon.dex}</h5>
            <h5 style={{margin: "1rem"}}>{onePokemon.flavor}</h5>
            <Btn/>
        </div>
    )
}

export default DetailPage