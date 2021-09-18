import React from "react";
import './public.css';
import Chart from "../Chart";

const Public = ({numberOfGoogle, numberOfFacebook, numberOfGitHub}) => {
    return (
        <div className='public'>
            <Chart numberOfGoogle={numberOfGoogle}
                   numberOfGitHub={numberOfGitHub}
                   numberOfFacebook={numberOfFacebook}/>
        </div>
    )
}

export default Public;