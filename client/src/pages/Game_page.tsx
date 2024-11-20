import { useOutletContext } from "react-router-dom";
import GameRulesModal from "../components/GameRulesModal/GameRulesModal";
import Game_zone from "../components/Game_zone/Game_zone";
import Header from "../components/Header/Header";
import "./Game_page.css";
import { useState } from "react";

function Game_page() {
  const { pseudo } = useOutletContext<{ pseudo: string }>();

  const [selectedChar, setSelectedChar] = useState<string>("");

  return (
    <div id="gamePage">
      <div className="hide-mobile-screen">
        <Header selectedChar={selectedChar} />
        <GameRulesModal />
      </div>
      <Game_zone pseudo={pseudo} setSelectedChar={setSelectedChar} />
    </div>
  );
}

export default Game_page;
