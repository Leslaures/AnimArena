import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <nav>
      <Link to="/Jeux" className="Game_button">
        Jouer
      </Link>
    </nav>
  );
}

export default App;
