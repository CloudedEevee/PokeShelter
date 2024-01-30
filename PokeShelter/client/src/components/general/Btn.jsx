import React from "react";


const Btn = (props) => {
    const {btnAction, onSubProp} = props;


    return (
        <button 
            onSubmit={onSubProp}
            >{btnAction}</button>
    )
}


export default Btn;