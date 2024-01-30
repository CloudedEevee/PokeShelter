import React, { useEffect, useState } from "react"; 
import './resultcards.css'
import Quicklook from "./quicklook";
import PokeballIcon from "../general/PokeballIcon";
import Btn from "../general/Btn";

const ResultCard = (props) => {
    const {pokemonCard, setPokemonCard, btnAction, setBtnAction, onSubProp, setOnSubProp} = props;
    const [nickname, setNickname] = useState("");

    useEffect(() => {
        let action = "Add to Party";
        setBtnAction(action);
        setOnSubProp(addToParty);
    },[])

    const addToParty = () => {
        setPokemonCard((prevPokeCard) =>[{...prevPokeCard[0], 'nickname': nickname}]);

    }

    //////////////////////////////////////////////////////////// Return
    return (
        <>
            {/* {
                pokemonCard > 0 ?  */}
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
                        onSubProp={onSubProp} />
                    
                </div>
                {/* :
                null
            } */}
        </>
    )

}


export default ResultCard;