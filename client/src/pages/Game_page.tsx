import { useOutletContext } from "react-router-dom";
import GameRulesModal from "../components/GameRulesModal/GameRulesModal";
import Game_zone from "../components/Game_zone/Game_zone";
import Header from "../components/Header/Header";
import "./Game_page.css";

function Game_page() {
  const { pseudo } = useOutletContext<{ pseudo: string }>();

  return (
    <div id="gamePage">
      <Header />
      <Game_zone pseudo={pseudo} />
      <GameRulesModal /> {/* Affiche la modale autonome */}
    </div>
  );
}

export default Game_page;
