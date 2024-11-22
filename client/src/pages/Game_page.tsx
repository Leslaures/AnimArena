import { useNavigate, useOutletContext } from "react-router-dom";
import GameRulesModal from "../components/GameRulesModal/GameRulesModal";
import Game_zone from "../components/Game_zone/Game_zone";
import Header from "../components/Header/Header";
import "./Game_page.css";
import { useState } from "react";

function Game_page() {
  const { pseudo } = useOutletContext<{ pseudo: string }>();
  const navigate = useNavigate(); // Pour naviguer entre les pages
  const [selectedChar, setSelectedChar] = useState<string>("");
  const handleEncyclopediaClick = () => {
    navigate("/encyclopedia");
  };
  return (
    <div id="gamePage">
      <div className="hide-mobile-screen">
        <Header selectedChar={selectedChar} />
        <GameRulesModal />
      </div>
      <Game_zone pseudo={pseudo} setSelectedChar={setSelectedChar} />
      {/* Bouton vers l'Encyclopédie */}
      <button
        type="button"
        onClick={handleEncyclopediaClick}
        className="encyclopedia-button"
      >
        Voir l'Encyclopédie
      </button>
    </div>
  );
}

export default Game_page;
