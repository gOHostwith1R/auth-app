import React from "react";
import './not-rules.css';
import Buttons from "../Buttons";

const NotRules = ({authUserBool, handleOnClick}) => {
    return (
        authUserBool ? <h1>Table</h1> : <Buttons handleOnClick={handleOnClick}/>
    )
}

export default NotRules;