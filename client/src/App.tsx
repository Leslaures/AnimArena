import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Pseudo from "./components/Pseudo/Pseudo";
import Game_page from "./pages/Game_page";

function App() {
  const [pseudo, setPseudo] = useState("");

  return (
    <div>
      <Pseudo pseudo={pseudo} setPseudo={setPseudo} />

      {pseudo ? (
        <nav>
          <Link to="/Jeux" className="Game_button">
            Jouer
          </Link>
        </nav>
      ) : (
        ""
      )}

      <Routes>
        <Route path="/Jeux" element={<Game_page /*pseudo={pseudo}*/ />} />
      </Routes>
    </div>
  );
}

export default App;
