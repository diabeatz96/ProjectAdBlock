import "./global.css"
import { createRoot } from 'react-dom/client';
import React from "react";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use 

const App = () => {
  console.log("ADAM IS HERE")
  return (
    <div>
      <h1 className="container">Hello from My Extension!</h1>
    </div>
  );
};

root.render(<App tab="home" />);
