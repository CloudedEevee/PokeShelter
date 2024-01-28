import React from "react";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';

const InputField = (props) => {


    //////////////////////////////////////////////////////////// Return
    return (
        <div>
            <form >
            <TextField
                id="outlined-controlled-size-small"
                label="Choose a Nickname"
                size="small"
                value={"Nickname"}
                onChange={(e) => {}}
            />

            </form>
        </div>
    )
}


export default InputField;