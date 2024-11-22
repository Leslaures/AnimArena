import { useState } from "react";
import Animals_card from "../Animals_card/Animals_card";
import Deck from "../Deck/Deck";
import "./Game_zone.css";
import type { AnimalType } from "../../pages/Game_page";

interface GamezoneProps {
  pseudo: string;
  selectedChar: string;
  setSelectedChar: (selectedChar: string) => void;
  setCharacteristicValidated: (validated: boolean) => void;
  animalComputer: AnimalType | null;
}

function Game_zone({
  pseudo,
  selectedChar,
  setSelectedChar,
  setCharacteristicValidated,
  animalComputer,
}: GamezoneProps) {
  const [animal, setAnimalP1] = useState<AnimalType | null>(null);
  const [showVersoCard, setShowVersoCard] = useState(false);
  const [showRectoCard, setShowRectoCard] = useState(false);
  const [showVersoCardCPU, setshowVersoCardCPU] = useState(false);

  const handleSetAnimalP1 = (animal: AnimalType) => {
    setAnimalP1(animal);
    setShowVersoCard(true);
    const timer = setTimeout(() => {
      setshowVersoCardCPU(true);
      //défausse deckcard CPU ?
    }, 1000);
    return () => clearTimeout(timer);
  };

  const handleVersoClick = () => {
    setShowRectoCard(true);
  };

  return (
    <main>
      <section id="zoneDeJeu">
        <div className="zoneDePiochePlayer">
          <Deck
            handleSetAnimalP1={handleSetAnimalP1}
            setShowVersoCard={() => {
              setCharacteristicValidated(false);
              setShowVersoCard(true);
            }}
            isP1={true}
          />
        </div>

        <section id="player">
          <div className="zoneDeJeuPlayer">
            <div
              id="imgPlayerContainer"
              className={
                showVersoCard && !showRectoCard ? "backgroundImage" : ""
              }
              onClick={handleVersoClick}
              onKeyUp={handleVersoClick}
            >
              {showRectoCard && animal && (
                <Animals_card
                  isP1={true}
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
              className={showVersoCardCPU ? "backgroundImage" : ""}
            >
              {animalComputer && (
                <Animals_card
                  isP1={false}
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
            handleSetAnimalP1={handleSetAnimalP1}
            setShowVersoCard={setShowVersoCard}
            isP1={false}
          />
        </div>
      </section>
    </main>
  );
}

export default Game_zone;
