import React, { useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { socket, websocketContext } from "./context/WebsocketContext";
import Websocket from "./components/Websocket";

function App() {
  return (
    <websocketContext.Provider value={socket}>
      <Websocket />
    </websocketContext.Provider>
  );
}

export default App;
