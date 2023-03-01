import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./Routes/Login";
import { Home } from "./Routes/Home";
import { ChatRoom } from "./Routes/ChatRoom";



function App() {

  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/chat/:roomName" exact component={ChatRoom} />
    </Router>
  );
}

export default App;
