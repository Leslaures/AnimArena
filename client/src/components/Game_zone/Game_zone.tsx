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
};

function Game_zone({ pseudo, setSelectedChar }: GamezoneProps) {
  const [animal, setAnimalInDeck] = useState(null as null | AnimalType);
  const [animalComputer, setAnimalComputer] = useState(
    null as null | AnimalType,
  );
  const [showVersoCard, setShowVersoCard] = useState(false);
  const [showAnimalCard, setShowAnimalCard] = useState(false);

  const handleSetAnimalP1 = (animal: AnimalType) => {
    setAnimalInDeck(animal);
    setShowVersoCard(true);
  };

  const handleSetAnimalCPU = (animalComputer: AnimalType) => {
    setAnimalComputer(animalComputer);
    setShowVersoCard(true);
  };

  const handleVersoClickP1 = () => {
    setShowAnimalCard(true);
  };
  const handleVersoClickCPU = () => {
    setShowAnimalCard(true);
  };
  return (
    <main>
      <section id="zoneDeJeu">
        <div className="zoneDePiochePlayer">
          <Deck
            setAnimalProp={handleSetAnimalP1}
            setShowVersoCard={setShowVersoCard}
          />
        </div>

        <section id="player">
          <div className="zoneDeJeuPlayer">
            <div
              id="imgPlayerContainer"
              className={
                showVersoCard && !showAnimalCard ? "backgroundImage" : ""
              }
              onClick={handleVersoClickP1}
              onKeyUp={handleVersoClickP1}
            >
              {showAnimalCard && animal && (
                <Animals_card
                  animal={animal}
                  setSelectedChar={setSelectedChar}
                />
              )}
            </div>
            <p>{pseudo || "Joueur"}</p>
          </div>
        </section>

        <section id="computer">
          <div className="zoneDeJeuComputer">
            <div
              id="imgComputerContainer"
              className={
                showVersoCard && !showAnimalCard ? "backgroundImage" : ""
              }
              onClick={handleVersoClickCPU}
              onKeyUp={handleVersoClickCPU}
            >
              {showAnimalCard && animalComputer && (
                <Animals_card
                  animal={animalComputer}
                  setSelectedChar={setSelectedChar}
                />
              )}
            </div>
            <p>Ordinateur</p>
          </div>
        </section>

        <div className="zoneDePiocheComputer">
          <Deck
            setAnimalProp={handleSetAnimalCPU}
            setShowVersoCard={setShowVersoCard}
          />
        </div>
      </section>
    </main>
  );
}

export default Game_zone;
