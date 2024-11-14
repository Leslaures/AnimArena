import Draw_card from "../Draw_card/Draw_card";
import "./Game_zone.css";

function Game_zone() {
  return (
    <main>
      <section id="zoneDeJeu">
        <div className="zoneDePiochePlayer" />

        <section id="player">
          <div className="zoneDeJeuPlayer">
            <div id="imgPlayerContainer">
              <Draw_card />
            </div>
            <p>Pseudo</p>
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
