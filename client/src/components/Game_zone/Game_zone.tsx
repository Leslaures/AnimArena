import { useState } from "react";
import Animals_card from "../Animals_card/Animals_card";
import Deck from "../Deck/Deck";
import "./Game_zone.css";

interface GamezoneProps {
  pseudo: string;
  selectedChar: string;
  setSelectedChar: (selectedChar: string) => void;
  setCharacteristicValidated: (validated: boolean) => void;
  animalComputer: AnimalType | null;
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

function Game_zone({
  pseudo,
  selectedChar,
  setSelectedChar,
  setCharacteristicValidated,
  animalComputer,
}: GamezoneProps) {
  const [animal, setAnimalInDeck] = useState<AnimalType | null>(null);
  const [showVersoCard, setShowVersoCard] = useState(false);
  const [showAnimalCard, setShowAnimalCard] = useState(false);

  const handleSetAnimalP1 = (animal: AnimalType) => {
    setAnimalInDeck(animal);
    setShowVersoCard(true);
  };

  const handleVersoClick = () => {
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
              onClick={handleVersoClick}
              onKeyUp={handleVersoClick}
            >
              {showAnimalCard && animal && (
                <Animals_card
                  animal={animal}
                  selectedChar={selectedChar}
                  setSelectedChar={setSelectedChar}
                  onValidateCharacteristic={() =>
                    setCharacteristicValidated(true)
                  }
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
              className={showVersoCard ? "backgroundImage" : ""}
            >
              {animalComputer && (
                <Animals_card
                  animal={animalComputer}
                  selectedChar={selectedChar}
                  setSelectedChar={setSelectedChar}
                  onValidateCharacteristic={() =>
                    setCharacteristicValidated(true)
                  }
                />
              )}
            </div>
            <p>Ordinateur</p>
          </div>
        </section>

        <div className="zoneDePiocheComputer">
          <Deck
            setAnimalProp={handleSetAnimalP1}
            setShowVersoCard={setShowVersoCard}
          />
        </div>
      </section>
    </main>
  );
}

export default Game_zone;
