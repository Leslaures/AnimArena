import "./Game_zone.css";

interface GamezoneProps {
  pseudo: string;
}

function Game_zone({ pseudo }: GamezoneProps) {
  return (
    <main>
    <section id="zoneDeJeu">
      <div className="zoneDePiochePlayer" />

      <section id="player">
        <div className="zoneDeJeuPlayer">
          <div id="imgPlayerContainer">
            <img
              src="../src/assets/images/Card_Placeholder.png"
              alt="rectangle blanc transparent"
            />
          </div>
          {<p>{pseudo}</p>}
        </div>
      </section>

      <section id="computer">
        <div className="zoneDeJeuComputer">
          <div id="imgComputerContainer">
            <img
              src="../src/assets/images/Card_Placeholder.png"
              alt="rectangle blanc transparent"
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