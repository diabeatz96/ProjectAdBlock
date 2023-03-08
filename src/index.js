import React from "react";
import ReactDOM from "react-dom";
import "./global.css"

const App = () => {
  console.log("ADAM IS HERE")
  return (
    <div>
      <h1 className="container">Hello from My Extension!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));