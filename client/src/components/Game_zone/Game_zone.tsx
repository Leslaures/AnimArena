import Deck from "../Deck/Deck";
import "./Game_zone.css";
import { useState } from "react";
import Animals_card from "../Animals_card/Animals_card";

interface GamezoneProps {
  pseudo: string;
  setSelectedChar: (selectedChar: string) => void;
}

type AnimalType = {
  nom: string;
  nom_male: string;
  nom_femelle: string;
  image: string;
  savais_tu: string;
  poids_kg: number;
  longueur_cm: number;
  longevite: number;
  gestation_jours: number;
  vitesse_kmh: number;
};

function Game_zone({ pseudo, setSelectedChar }: GamezoneProps) {
  const [animal, setAnimalInDeck] = useState(null as null | AnimalType);
  return (
    <main>
      <section id="zoneDeJeu">
        <div className="zoneDePiochePlayer">
          <Deck setAnimalProp={setAnimalInDeck} />
        </div>

        <section id="player">
          <div className="zoneDeJeuPlayer">
            <div id="imgPlayerContainer">
              {animal && (
                <Animals_card
                  animal={animal}
                  setSelectedChar={setSelectedChar}
                />
              )}
            </div>
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
