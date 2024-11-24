import { Link, useOutletContext } from "react-router-dom";
import GameRulesModal from "../components/GameRulesModal/GameRulesModal";
import HeaderHP from "../components/Header HP/HeaderHP";
import Pseudo from "../components/Pseudo/Pseudo";

function Home_page() {
  const { pseudo, setPseudo } = useOutletContext<{
    pseudo: string;
    setPseudo: (value: string) => void;
  }>();

  return (
    <>
      <HeaderHP />
      <div>
        <Pseudo pseudo={pseudo} setPseudo={setPseudo} />

        {pseudo ? (
          <nav>
            <Link to="/game" className="Game_button">
              Jouer
            </Link>
          </nav>
        ) : (
          ""
        )}
      </div>
      <GameRulesModal />
    </>
  );
}

export default Home_page;
