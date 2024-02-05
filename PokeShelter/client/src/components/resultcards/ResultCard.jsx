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
  } = props;
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");

  useEffect(() => {
    let action = "Add to Party";
    setBtnAction(action);
  }, []);

  const addToParty = (e) => {
    const validationError = validateNickname(nickname);
    if (validationError) {
      setNicknameError(validationError);
      return;
    }

    setNicknameError(""); 
    console.log(saveToDB({ ...pokemonCard, nickname })); // Only send the necessary data to the server
  };

  const validateNickname = (value) => {
    if (value.length < 3) {
      return "Nickname must have a minimum of 3 characters";
    }
    return ""; // Empty string indicates no error
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
          {nicknameError && <p className="error-message">{nicknameError}</p>}
          <Btn btnAction={btnAction} onSubProp={addToParty} />
        </div>
      ) : null}
    </>
  );
};

export default ResultCard;