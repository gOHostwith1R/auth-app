import React from "react";
import './buttons.css'

import {facebookProvider, githubProvider, googleProvider} from "../../config/authMethod";
import {ReactComponent as FacebookIcon} from "../../image/4202110facebook.svg";
import {ReactComponent as GitHubIcon} from "../../image/github_icon.svg";
import {ReactComponent as GoogleIcon} from "../../image/google_icon.svg";

const Buttons = ({handleOnClick}) => {
    return (
        <div className='wrapper-buttons'>
            <h1>Please identify yourself</h1>
            <div className='group-buttons'>
                <button className='btn btn-primary' onClick={() => handleOnClick(facebookProvider)}><FacebookIcon /></button>
                <button className='btn btn-primary' onClick={() => handleOnClick(githubProvider)}><GitHubIcon /></button>
                <button className='btn btn-primary' onClick={() => handleOnClick(googleProvider)}><GoogleIcon /></button>
            </div>
        </div>
    )
}

export default Buttons;