import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [pseudo, setPseudo] = useState("");

  return (
    <div>
      <Outlet context={{ pseudo, setPseudo }} />
    </div>
  );
}

export default App;
