import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PartyCard = (props) => {
  const { pokeParty, setPokeParty } = props;

  const [editMode, setEditMode] = useState({});
  const [newNickname, setNewNickname] = useState({});
  const [nicknameError, setNicknameError] = useState({});

  const releasePoke = (idFromMap) => {
    axios
      .delete(`http://localhost:8000/api/pokemon/${idFromMap}`)
      .then((res) => {
        console.log("Released Pokemon:", res);
        const newPokeParty = pokeParty.filter(
          (allOtherPokemon) => allOtherPokemon._id !== idFromMap
        );
        setPokeParty(newPokeParty);
      })
      .catch((err) => {
        console.log("Something went wrong: ", err);
      });
  };

  const handleEdit = (id, currentNickname) => {
    setEditMode((prev) => ({ ...prev, [id]: true }));
    setNewNickname((prev) => ({ ...prev, [id]: currentNickname }));
    setNicknameError((prev) => ({ ...prev, [id]: "" })); 
  };

  const handleEditSubmit = (id) => {
    if (newNickname[id].length < 3) {
      setNicknameError((prev) => ({ ...prev, [id]: "Nickname must have a minimum of 3 characters" }));
      return; 
    }

    setEditMode((prev) => ({ ...prev, [id]: false }));

    // Make the API call to update the nickname
    axios
      .put(`http://localhost:8000/api/pokemon/${id}`, { nickname: newNickname[id] })
      .then((res) => {
        console.log("Updated Pokemon:", res);
        
        setPokeParty((prev) =>
          prev.map((p) => (p._id === id ? { ...p, nickname: newNickname[id] } : p))
        );
      })
      .catch((err) => {
        console.log("Something went wrong: ", err);
      });
  };

  return (
    <>
      {pokeParty.map((onePokemon, i) => (
        <div className="partyCard" key={i}>
          {onePokemon && onePokemon.name && (
            <>
              <img src={onePokemon.sprite} alt={onePokemon.name} />  
              <h3>{onePokemon.name.charAt(0).toUpperCase() + onePokemon.name.slice(1)}</h3>
              <Link to={`/pokemon/details/${onePokemon._id}`}><h4>{onePokemon.nickname}</h4></Link>
              <button className="red-btn" onClick={() => releasePoke(onePokemon._id)}>
                Release
              </button>
              <button className="edit-btn" onClick={() => handleEdit(onePokemon._id, onePokemon.nickname)}>
                Edit
              </button>

              {editMode[onePokemon._id] && (
                <div>
                  <input
                    type="text"
                    value={newNickname[onePokemon._id] || ""}
                    onChange={(e) => {
                      setNewNickname((prev) => ({ ...prev, [onePokemon._id]: e.target.value }));
                      setNicknameError((prev) => ({ ...prev, [onePokemon._id]: "" })); // Clear nickname error on change
                    }}
                  />
                  <button onClick={() => handleEditSubmit(onePokemon._id)}>Save</button>
                  {nicknameError[onePokemon._id] && (
                    <p className="error-message">{nicknameError[onePokemon._id]}</p>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default PartyCard;


