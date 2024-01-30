import React, { useEffect, useState } from "react"; 
import './resultcards.css'
import Quicklook from "./quicklook";
import PokeballIcon from "../general/PokeballIcon";
import Btn from "../general/Btn";
import axios from "axios";

const ResultCard = (props) => {
    const {pokemonCard, setPokemonCard, btnAction, setBtnAction, pokeParty, setPokeParty} = props;
    const [nickname, setNickname] = useState("");

    useEffect(() => {
        let action = "Add to Party";
        setBtnAction(action);
    },[])
    //////////////////////////////////////////////////////////// Add pokemon to DB >>NOT WORKING<<
    const addToParty = (e) => {
        addNickname();
        await saveToDB(pokemonCard);
    }
    
    const addNickname = () => {
        return new Promise((res, rej) => {
            setPokemonCard((prevPokeCard) =>({...prevPokeCard, 'nickname': nickname}));\
        })
    }

    const saveToDB = (data) => {
        console.log(data);
        axios 
            .post(`http://localhost:8000/api/pokemon`, data)
            .then(res => {
                console.log(res.data);
                setPokeParty( (prevPokeParty) => [...prevPokeParty, res.data]);
            })
            .catch(err => console.log(err))
    }

    //////////////////////////////////////////////////////////// Return
    return (
        <>
            {
                pokemonCard.dex ? 
                <div className="resultCard">
                    <div className="resTop">
                        <PokeballIcon />
                        <Quicklook 
                            pokemonCard={pokemonCard}
                            nickname={nickname}
                            setNickname={setNickname}
                            />
                    </div>
                    <Btn 
                        btnAction={btnAction}
                        onSubProp={addToParty} />
                    
                </div>
                :
                null
            }
        </>
    )

}


export default ResultCard;