import React from "react";
import "./styles.css";
import {useState} from "react";


export default function App() {
  const [name,setName]=useState("Aaron");

  function handleClick(){
    setName("Not Aaron");

  }

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
}
