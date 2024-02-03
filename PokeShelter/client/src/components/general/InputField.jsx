import React, { useState } from "react"; 
import TextField from "@mui/material/TextField";

const InputField = (props) => {
    const {nickname, setNickname} = props;
    




    //////////////////////////////////////////////////////////// Return
    return (
        <div>
            <form >
            <TextField
                id="outlined-controlled-size-small"
                label="Choose a Nickname"
                size="small"
                value={nickname}
                onChange={(e) => {setNickname(e.target.value)}}
            />
            </form>
        </div>
    )
}

export default InputField;