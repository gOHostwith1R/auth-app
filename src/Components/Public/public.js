import React from "react";
import './public.css';
import Chart from "../Chart";

const Public = ({usersFacebook, usersGitHub, usersGoogle}) => {
    return (
        <div className='public'>
            <Chart usersGitHub={usersGitHub}
                   usersGoogle={usersGoogle}
                   usersFacebook={usersFacebook}
                   />
        </div>
    )
}

export default Public;