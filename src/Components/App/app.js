import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Private from "../Private";
import Public from "../Public";
import NotRules from "../NotRules";
import Buttons from "../Buttons";
import './app.css'
import socialMediaAuth from "../../service/authentication";
import {Switch} from "react-router";

const App = () => {
    const [authUserBool, setAuthUserBool] = useState(false);
    const [usersGitHub, setUsersGitHub] = useState([]);
    const [usersGoogle, setUsersGoogle] = useState([]);
    const [usersFacebook, setUsersFacebook] = useState([]);
    const [users, setUsers] = useState([]);

    const handleOnClick = async (provider) => {
        const res =  await socialMediaAuth(provider)
        setAuthUserBool(true);
        const providerId = res._delegate.providerData[0].providerId
        setUsers(res);
        console.log(users)
         providerId === 'google.com' ? setUsersGoogle([...usersGoogle, res]) :
            (providerId === 'github.com' ? setUsersGitHub([...usersGitHub, res])
                : setUsersFacebook([...usersFacebook, res]))
        return res;
    }

    return (
        <div className='app'>
            <Router>
                <div className='header'>
                    <Link to='/public'>Public</Link>
                    <Link to='/private'>Private</Link>
                </div>
                <Switch>
                    <Route path={['/public/', '//']}>
                        <Public usersGitHub={usersGitHub}
                                usersGoogle={usersGoogle}
                                usersFacebook={usersFacebook}/>
                        <Buttons handleOnClick={handleOnClick}/>
                    </Route>
                    <Route path='/private'>
                        {authUserBool ? <Private /> : <NotRules authUserBool={authUserBool} handleOnClick={handleOnClick} /> }
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;