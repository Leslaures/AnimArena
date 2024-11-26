import { useEffect, useState } from "react";
import "./Game_zone.css";
import type { AnimalType } from "../../pages/Game_page";
import type { SelectedCharType } from "../../pages/Game_page";
import Animals_card from "../Animals_card/Animals_card";
import Deck from "../Deck/Deck";
import Help from "../Help/Help";
import Winner from "../Winner/Winner";
import Winner_modal from "../Winner_modal/Winner_modal";

interface GamezoneProps {
  pseudo: string;
  selectedChar: SelectedCharType;
  setSelectedChar: (selectedChar: SelectedCharType) => void;
  setCharacteristicValidated: (validated: boolean) => void;
  animalComputer: AnimalType | null;
  winnerEmoji: string | null;
  winnerMessage: string | null;
  setWinnerMessage: (winnerMessage: string) => void;
  setWinnerEmoji: (winnerEmoji: string) => void;
}

function Game_zone({
  pseudo,
  selectedChar,
  setSelectedChar,
  setCharacteristicValidated,
  animalComputer,
  winnerEmoji,
  winnerMessage,
  setWinnerMessage,
  setWinnerEmoji,
}: GamezoneProps) {
  const [animal, setAnimalP1] = useState<AnimalType | null>(null);
  const [showVersoCard, setShowVersoCard] = useState(false);
  const [showRectoCard, setShowRectoCard] = useState(false);
  const [showVersoCardCPU, setshowVersoCardCPU] = useState(false);
  const [cpuIdDeckCard, setCpuIdDeckCard] = useState<string>("");
  const [help, setHelp] = useState(
    "Choisis une carte : clique sur une petite carte pour l'afficher dans ta zone de jeu",
  );
  const [charCPU, setCharCPU] = useState(0);
  const [show, setShow] = useState(false);
  const [isP1Turn, setIsP1Turn] = useState<boolean | null>(true);

  // Permet de setter la caractéristique du CPU
  useEffect(() => {
    if (selectedChar && animalComputer) {
      // Mapper les labels aux propriétés de l'objet animalComputer
      let cpuValue: number;
      switch (selectedChar.label.toLowerCase()) {
        case "poids":
          cpuValue = animalComputer.poids_kg;
          break;
        case "longueur":
          cpuValue = animalComputer.longueur_cm;
          break;
        case "longévité":
          cpuValue = animalComputer.longevite_ans;
          break;
        case "gestation":
          cpuValue = animalComputer.gestation_jours;
          break;
        case "vitesse":
          cpuValue = animalComputer.vitesse_kmh;
          break;
        default:
          cpuValue = 0;
      }
      setCharCPU(cpuValue);
      console.info("CPU Characteristic:", cpuValue);
      console.info("Player Characteristic:", selectedChar);
    }
  }, [selectedChar, animalComputer]);

  // Permet de définir le gagnant
  useEffect(() => {
    if (selectedChar && charCPU) {
      setIsP1Turn(null); // tour du CPU /*TODO:*/
      let winnerMessage: string;
      let winnerEmoji: string;
      if (selectedChar.value > charCPU) {
        winnerMessage = "Bravo, tu as remporté la manche !";
        winnerEmoji = "🎉";
      } else if (selectedChar.value < charCPU) {
        winnerMessage = "L'ordinateur a remporté la manche !";
        winnerEmoji = "🤖";
      } else {
        winnerMessage = "Vous êtes à égalité !";
        winnerEmoji = "🤝";
      }
      const timer = setTimeout(() => {
        setWinnerEmoji(winnerEmoji);
        setWinnerMessage(winnerMessage);
        setShow(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [selectedChar, charCPU, setWinnerMessage, setWinnerEmoji]);

  // Choisit quel index de carte CPU à défausser
  useEffect(() => {
    if (showVersoCardCPU) {
      const randomCpuIdDeckCard = (
        Math.floor(Math.random() * 5) + 1
      ).toString();
      setCpuIdDeckCard(randomCpuIdDeckCard);
    }
  }, [showVersoCardCPU]);

  // Choisit quelle aide afficher
  useEffect(() => {
    if (animal) {
      setHelp("Clique sur ta carte pour la révéler");
    }
  }, [animal]);
  useEffect(() => {
    if (showRectoCard) {
      setHelp("Choisis une caractéristique à comparer");
    }
  }, [showRectoCard]);
  useEffect(() => {
    if (selectedChar) {
      setHelp("Si tu es prêt / prête à lancer le duel, clique sur GO !");
    }
  }, [selectedChar]);

  // Permet de synchroniser l'affichage de la carte du CPU avec celle du P1
  const handleSetAnimalP1 = (animal: AnimalType) => {
    setAnimalP1(animal);
    setShowVersoCard(true);
    const timer = setTimeout(() => {
      setshowVersoCardCPU(true);
    }, 2400);
    const timer2 = setTimeout(() => {
      setIsP1Turn(true); // tour du CPU  /*TODO:*/
    }, 5000);
    return function clearTimeoutFct() {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  };

  // Permet de retourner la carte du P1
  const handleVersoClick = () => {
    setShowRectoCard(true);
  };

  return (
    <main>
      <section id="zoneDeJeu">
        <div
          className={`${"zoneDePiochePlayer"} ${isP1Turn || isP1Turn === null ? "" : "grayed-out"}`}
        >
          <Deck
            handleSetAnimalP1={handleSetAnimalP1}
            cpuIdDeckCard={cpuIdDeckCard}
            showVersoCard={showVersoCard}
            setShowVersoCard={() => {
              setCharacteristicValidated(false);
              setShowVersoCard(true);
            }}
            isP1={true}
            setIsP1Turn={setIsP1Turn}
          />
        </div>

        <section id="player">
          <div
            className={`${"zoneDeJeuPlayer"} ${isP1Turn || isP1Turn === null ? "" : "grayed-out"}`}
          >
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
                  setIsP1Turn={setIsP1Turn}
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
          <div
            className={`${"zoneDeJeuComputer"} ${!isP1Turn || isP1Turn === null ? "" : "grayed-out"}`}
          >
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
                  setIsP1Turn={setIsP1Turn}
                  onValidateCharacteristic={() =>
                    setCharacteristicValidated(true)
                  }
                />
              )}
            </div>
            <p>Ordinateur</p>
          </div>
        </section>

        <div
          className={`${"zoneDePiocheComputer"} ${!isP1Turn || isP1Turn === null ? "" : "grayed-out"}`}
        >
          <Deck
            handleSetAnimalP1={handleSetAnimalP1}
            setShowVersoCard={setShowVersoCard}
            isP1={false}
            cpuIdDeckCard={cpuIdDeckCard}
            showVersoCard={showVersoCard}
            setIsP1Turn={setIsP1Turn}
          />
        </div>
      </section>
      <Help help={help} />
      <Winner_modal show={show} onClose={() => setShow(false)}>
        <Winner winnerMessage={winnerMessage} winnerEmoji={winnerEmoji} />
      </Winner_modal>
    </main>
  );
}

export default Game_zone;
