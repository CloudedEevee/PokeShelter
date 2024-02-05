import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Nav from '../navsearch/Nav';


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
    }, [id])

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Nav/>
            <img style={{margin: "1rem"}} id="pokemon" src={onePokemon.sprite} alt="Pokemon sprite" />
            <h3 style={{margin: "1rem"}}>{onePokemon.nickname}</h3>
            <h4 style={{color: "brown", margin: "1rem"}}>{onePokemon.name}</h4>
            <h5 style={{color: "brown", margin: "1rem"}}>Dex #{onePokemon.dex}</h5>
            <h5 style={{color: "brown", margin: "1rem"}}>Type: {onePokemon.type}</h5>
            <h5 style={{margin: "1rem"}}>{onePokemon.flavor?.flavor_text}</h5>                   
        </div>
    )
}

export default DetailPage;