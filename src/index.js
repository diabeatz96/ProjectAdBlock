import "./global.css"
import './killer'
import { createRoot } from 'react-dom/client';
import React from "react";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use 
 


const Button = () => {
  return (
      <>
      <a>
      <button className="button"> </button>
      </a>
      </>
  )
}

const Toggle = () => {
  return (
<label className="switch">
     <input type="checkbox"/>
      <span className="slider round"></span>
    </label>
  )
}

const App = () => {
  console.log("ADAM IS HERE")
  return (
    <div className="container">
      <h1>Project Ad Blocker</h1>
      <Toggle/>
      <p> This was created by Adam Kostandy and Conor Farrell </p>
    </div>
  );
};

root.render(<App tab="home" />);
