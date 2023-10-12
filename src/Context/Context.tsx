import React, { useState, createContext, useDebugValue, useEffect } from 'react'
import { Prop } from '../Components/Hoc'
export type Auth = {
  user : string,
}
const UserContext = createContext<[Auth, Function]>([{user : ""}, Function]);
function Provider(props : Prop) {
  const [user, setUser] = useState<Auth>({
    user: "",
  });
  useEffect(() => {
    if(localStorage.getItem("username") != undefined){
      setUser({user: localStorage.getItem("username").toString()});
    }
  }, [])
  return (
   <UserContext.Provider value = {[user, setUser]}>
      {props.children}
   </UserContext.Provider>
  )
}
export {UserContext, Provider};