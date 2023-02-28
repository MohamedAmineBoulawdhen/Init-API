import React from "react";
import UserListaxios from "./UserListaxios";
import UserListfetch from "./UserListfetch";
import "./index.css";
function App() {
  return (
    <div className="App">
      <h2 className="header">User list using axios method (get).</h2>
      <UserListaxios />
      <h2 className="header">User list using javascript method (fetch).</h2>
      <UserListfetch />
    </div>
  );
}

export default App;
