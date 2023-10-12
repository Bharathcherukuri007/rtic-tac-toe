import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hoc from "./Hoc";
import {
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Child from "./Child";
import ProtectedRoute from "./Hoc";
import { Provider, UserContext } from "../Context/Context";
import Login from "./Login";
import Game from "./Game";

function App() {
  const [user, setUser] = useState<string[]>(["null"]);

  return (
    <Provider>

    <Routes>
      <Route path="/" element={<Child display="name"></Child>}></Route>
      <Route path="/protected" element = {<ProtectedRoute children = {<Child display="user"/>}></ProtectedRoute>}></Route>
      <Route path="/game" element= {<ProtectedRoute> <Game/></ProtectedRoute>}></Route>
    </Routes>
    </Provider>
  );
}

export default App;
