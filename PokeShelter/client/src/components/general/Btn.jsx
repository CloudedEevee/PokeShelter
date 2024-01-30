import React from "react";


const Btn = (props) => {
    const {btnAction, onSubProp} = props;


    return (
        <button 
            onClick={(e) => onSubProp}
            >{btnAction}</button>
    )
}


export default Btn;