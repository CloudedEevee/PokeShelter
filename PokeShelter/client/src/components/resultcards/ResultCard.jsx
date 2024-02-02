import React, { useEffect, useState } from "react";
import "./resultcards.css";
import Quicklook from "./quicklook";
import PokeballIcon from "../general/PokeballIcon";
import Btn from "../general/Btn";
import axios from "axios";

const ResultCard = (props) => {
  const {
    pokemonCard,
    setPokemonCard,
    btnAction,
    setBtnAction,
    pokeParty,
    setPokeParty,
    betterName
  } = props;
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    let action = "Add to Party";
    setBtnAction(action);
  }, []);

  const addToParty = (e) => {
    console.log(saveToDB({...pokemonCard, nickname })); // Only send the necessary data to the server
  };

  const saveToDB = (data) => {
    console.log("Data being sent to the server:", data);

    axios
      .post(`http://localhost:8000/api/pokemon`, data)
      .then((res) => {
        console.log("Server response:", res.data);
        setPokeParty((prevPokeParty) => [...prevPokeParty, res.data]);
        return res.data;
      })
      .catch((err) => console.error("Error in POST request:", err));
  };

  return (
    <>
      {pokemonCard.dex ? (
        <div className="resultCard">
          <div className="resTop">
            <PokeballIcon />
            <Quicklook
              pokemonCard={pokemonCard}
              nickname={nickname}
              setNickname={setNickname}
            />
          </div>
          <Btn btnAction={btnAction} onSubProp={addToParty} />
        </div>
      ) : null}
    </>
  );
};

export default ResultCard;

