import Deck from "../Deck/Deck";
import "./Game_zone.css";

interface GamezoneProps {
  pseudo: string;
}

function Game_zone({ pseudo }: GamezoneProps) {
  return (
    <main>
      <section id="zoneDeJeu">
        <div className="zoneDePiochePlayer">
          <Deck />
        </div>

        <section id="player">
          <div className="zoneDeJeuPlayer">
            <div id="imgPlayerContainer">{/* <Draw_card /> */}</div>
            {<p>{pseudo}</p>}
          </div>
        </section>

        <section id="computer">
          <div className="zoneDeJeuComputer">
            <div id="imgComputerContainer">
              <img
                src="../src/assets/images/carte_verso.png"
                alt="carte verso"
              />
            </div>
            <p>Ordinateur</p>
          </div>
        </section>

        <div className="zoneDePiocheComputer" />
      </section>
    </main>
  );
}

export default Game_zone;
