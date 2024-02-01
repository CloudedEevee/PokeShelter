import React, { useState } from "react";
import axios from "axios";

const PartyCard = (props) => {
  const { pokeParty, setPokeParty } = props;

  const [editMode, setEditMode] = useState({});
  const [newNickname, setNewNickname] = useState({});

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
  };

  const handleEditSubmit = (id) => {
    setEditMode((prev) => ({ ...prev, [id]: false }));

    // Make the API call to update the nickname
    axios
      .put(`http://localhost:8000/api/pokemon/${id}`, { nickname: newNickname[id] })
      .then((res) => {
        console.log("Updated Pokemon:", res);
        // Assuming the API returns the updated Pokemon, update the state
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
              <h3>{onePokemon.name.charAt(0).toUpperCase() + onePokemon.name.slice(1)}</h3>
              <h4>{onePokemon.nickname}</h4>
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
                    onChange={(e) =>
                      setNewNickname((prev) => ({ ...prev, [onePokemon._id]: e.target.value }))
                    }
                  />
                  <button onClick={() => handleEditSubmit(onePokemon._id)}>Save</button>
                  
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


