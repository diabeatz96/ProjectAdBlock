import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  console.log("ADAM IS HERE")
  return (
    <div>
      <h1>Hello from My Extension!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));