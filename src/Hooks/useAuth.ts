import React, { useContext } from 'react'
import { Auth, UserContext } from '../Context/Context'

export default  function useAuth() {
    const [state, setState] = React.useContext(UserContext);
    console.log(state);
    function addUser(name: string){
        localStorage.setItem("username", name);
        setState({user: name});

    }
    function logOut(){
        setState("");
    }

    return {
        addUser, logOut, state
    }

};
