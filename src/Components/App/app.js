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
    let [numberOfGoogle, setNumberOfGoogle] = useState(0);
    let [numberOfFacebook, setNumberOfFacebook] = useState(0);
    let [numberOfGitHub, setNumberOfGitHub] = useState(0);
    const [users, setUsers] = useState([]);

    const handleOnClick = async (provider) => {
        const res =  await socialMediaAuth(provider)
        setAuthUserBool(true);
        setUsers([...users, res]);
        const providerId = res._delegate.providerData[0].providerId
        providerId === 'google.com' ? setNumberOfGoogle(numberOfGoogle+1) :
            (providerId === 'github.com' ? setNumberOfGitHub(numberOfGitHub+1)
                : setNumberOfFacebook(numberOfFacebook+1))
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
                        <Public numberOfGoogle={numberOfGoogle}
                                numberOfGitHub={numberOfGitHub}
                                numberOfFacebook={numberOfFacebook}/>
                        <Buttons handleOnClick={handleOnClick}/>
                    </Route>
                    <Route path='/private'>
                        {authUserBool ? <Private users={users}/> : <NotRules authUserBool={authUserBool} handleOnClick={handleOnClick} /> }
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;