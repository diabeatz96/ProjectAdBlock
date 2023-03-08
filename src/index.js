import "./global.css"
import { createRoot } from 'react-dom/client';
import React from "react";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use 

const App = () => {
  console.log("ADAM IS HERE")
  return (
    <div className="container">
      <h1>Hello from Conor!</h1>
    </div>
  );
};

root.render(<App tab="home" />);
