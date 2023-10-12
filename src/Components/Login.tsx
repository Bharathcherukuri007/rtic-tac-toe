import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";

export default function Login() {
  const { addUser, logOut, state } = useAuth();
  const [user, setUser] = useState("");
  return (
    <div className="loginpage">
      <div className="maincontainer">
        <h1>Login</h1>
        <label htmlFor="" className="container">
          Username <input type="text" className="username" onChange={(e) => setUser(e.target.value)}/>{" "}
        </label>
        <label htmlFor="" className="container">
          password <input type="password" className="password" />
        </label>
        <button className="loginbutton" onClick={() => addUser(user)}>Login</button>
      </div>
    </div>
  );
}
