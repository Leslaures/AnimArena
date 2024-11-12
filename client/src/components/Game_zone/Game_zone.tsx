import "./Game_zone.css";

function Game_zone() {
  return (
    <main>
      <section id="zoneDeJeu">
        <div className="zoneDePiochePlayer" />
        <section id="player">
          <div className="zoneDeJeuPlayer">
            <img
              src="../src/assets/images/Card_Placeholder.png"
              alt="rectangle blanc transparent"
            />
            <p>Pseudo</p>
          </div>        
        </section>
        
        <section id="computer">
          <div className="zoneDeJeuComputer">
            <img
              src="../src/assets/images/Card_Placeholder.png"
              alt="rectangle blanc transparent"
            />
            <p>Ordinateur</p>
          </div>        
        </section>
        <div className="zoneDePiocheComputer" />
      </section>
    </main>
  );
}

export default Game_zone;
