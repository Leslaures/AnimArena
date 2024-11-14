import Game_zone from "../components/Game_zone/Game_zone";
import Header from "../components/Header/Header";
import "./Game_page.css";

// interface GamePageProps {
//   pseudo: string;
// }

function Game_page() {
  return (
    <div id="gamePage">
      <Header />
      <Game_zone /*pseudo={pseudo}*/ />
    </div>
  );
}

export default Game_page;
