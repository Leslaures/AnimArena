import { useEffect, useState } from "react";
import "./Game_zone.css";
import type { AnimalType } from "../../pages/Game_page";
import type { SelectedCharType } from "../../pages/Game_page";
import Animals_card from "../Animals_card/Animals_card";
import Deck from "../Deck/Deck";
import Help from "../Help/Help";
import Round from "../Round/Round";
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
  setAnimalComputer: (animal: AnimalType | null) => void;
  characteristicValidated: boolean;
  charCPU: number;
  setCharCPU: (charCPU: number) => void;
  setWinner: (winner: string | null) => void;
  showRectoCardCPU: boolean;
  isFlippedCPU: boolean;
  setShowRectoCardCPU: (show: boolean) => void;
  setIsFlippedCPU: (isFlipped: boolean) => void;
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
  setAnimalComputer,
  characteristicValidated,
  charCPU,
  setCharCPU,
  setWinner,
  showRectoCardCPU,
  isFlippedCPU,
  setShowRectoCardCPU,
  setIsFlippedCPU,
}: GamezoneProps) {
  /*SECTION: Constantes d'état*/
  const [animal, setAnimalP1] = useState<AnimalType | null>(null);
  const [showVersoCard, setShowVersoCard] = useState(false);
  const [showRectoCard, setShowRectoCard] = useState(false);
  const [showVersoCardCPU, setshowVersoCardCPU] = useState(false);

  const [cpuIdDeckCard, setCpuIdDeckCard] = useState<string>("");
  const [help, setHelp] = useState("Choisis une carte dans ta zone de pioche");
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [isP1Turn, setIsP1Turn] = useState<boolean | null>(true);
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [round, setRound] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  /*SECTION : Permet de setter la caractéristique du CPU*/
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
  }, [selectedChar, animalComputer, setCharCPU]);

  /*SECTION : Permet de définir le gagnant d'une manche*/
  useEffect(() => {
    // Fonction utilitaire pour delay
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    const determineWinner = async () => {
      if (selectedChar && charCPU) {
        await delay(
          2000,
        ); /*GREY : SIXIEME passage au tour de personne après que CPU ait dévoiler sa carte*/

        setIsP1Turn(null);
        let winnerMessage: string;
        let winnerEmoji: string;
        let winner: string;
        if (selectedChar.value > charCPU) {
          winnerMessage = "Bravo, tu as remporté la manche !";
          winnerEmoji = "🎉";
          setPlayerScore((prevPlayerScore) => prevPlayerScore + 1);
          winner = "player";
        } else if (selectedChar.value < charCPU) {
          winnerMessage = "L'ordinateur a remporté la manche !";
          winnerEmoji = "🤖";
          setCpuScore((prevCpuScore) => prevCpuScore + 1);
          winner = "cpu";
        } else {
          winnerMessage = "Vous êtes à égalité !";
          winnerEmoji = "🤝";
          setCpuScore((prevCpuScore) => prevCpuScore + 1);
          setPlayerScore((prevPlayerScore) => prevPlayerScore + 1);
          winner = "égalité";
        }
        setWinner(winner);

        await delay(4000);

        setWinnerEmoji(winnerEmoji);
        setWinnerMessage(winnerMessage);
        setShowWinnerModal(true);

        await delay(4000);

        setRound((prevRound) => prevRound + 1);
        setAnimalP1(null);
        setShowVersoCard(false);
        setShowRectoCard(false);
        setshowVersoCardCPU(false);
        setShowRectoCardCPU(false);
        setCpuIdDeckCard("");
        setHelp("Clique sur une carte dans ta zone de pioche");
        setCharCPU(0);
        setShowWinnerModal(false);
        setIsP1Turn(true);
        setAnimalComputer(null);
        setCharacteristicValidated(false);
        setSelectedChar({ label: "", value: 0, unit: "" });
        setWinner("");
        setIsFlipped(false);
        setIsFlippedCPU(false);
      }
    };
    determineWinner();
  }, [
    selectedChar,
    charCPU,
    setAnimalComputer,
    setCharacteristicValidated,
    setWinnerEmoji,
    setWinnerMessage,
    setSelectedChar,
    setCharCPU,
    setWinner,
    setIsFlippedCPU,
    setShowRectoCardCPU,
  ]);

  /*SECTION :Permet de vérifier si le jeu est terminé après 5 manches*/
  useEffect(() => {
    if (round > 5) {
      setTimeout(() => {
        alert(
          `Jeu terminé ! Score final - Joueur : ${playerScore}, Ordinateur : ${cpuScore}`,
        );
        handleRestart(); /*TODO*/
        setPlayerScore(0);
        setCpuScore(0);
        setRound(1);
      }, 1000);
    }
  }, [round, playerScore, cpuScore]);

  /*SECTION : Choisit quel index de carte CPU à défausser*/
  useEffect(() => {
    if (showVersoCardCPU) {
      const randomCpuIdDeckCard = (
        Math.floor(Math.random() * 5) + 1
      ).toString();
      setCpuIdDeckCard(randomCpuIdDeckCard);
    }
  }, [showVersoCardCPU]);

  /*SECTION : Choisit quelle aide afficher*/
  useEffect(() => {
    if (showVersoCardCPU) {
      const timer = setTimeout(() => {
        setHelp("Clique sur ta carte pour la révéler");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showVersoCardCPU]);

  useEffect(() => {
    if (showRectoCard) {
      setHelp("Choisis la caractéristique sur laquelle tu veux lancer le duel");
    }
  }, [showRectoCard]);

  useEffect(() => {
    if (selectedChar.value !== 0) {
      setHelp("Si tu es prêt / prête à lancer le duel, clique sur GO !");
    }
  }, [selectedChar]);

  useEffect(() => {
    if (isP1Turn === false) {
      const timer = setTimeout(() => {
        setHelp("");
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isP1Turn]);

  /*SECTION : Permet de synchroniser l'affichage de la carte du CPU avec celle du P1*/
  const handleSetAnimalP1 = (animal: AnimalType) => {
    setAnimalP1(animal);
    setShowVersoCard(true);
    const timer = setTimeout(() => {
      setshowVersoCardCPU(true);
    }, 2000); /*GREY : DEUXIEME CPU montre le dos de sa carte après que P1 montre le sien */
    const timer2 = setTimeout(() => {
      setIsP1Turn(true);
    }, 3000); /*GREY : TROISIEME passage au tour du P1 après que CPU révèle le dos de sa carte*/
    return function clearTimeoutFct() {
      clearTimeout(timer2);
      clearTimeout(timer);
    };
  };

  /*SECTION : Permet de retourner la carte du P1*/
  const handleVersoClick = () => {
    setIsFlipped(true);
    setShowRectoCard(true);
  };

  /*SECTION : Permet de relancer une partie*/
  const handleRestart = () => {
    setIsResetting(true);
    setAnimalP1(null);
    setShowVersoCard(false);
    setShowRectoCard(false);
    setshowVersoCardCPU(false);
    setShowRectoCardCPU(false);
    setIsFlipped(false);
    setIsFlippedCPU(false);
    setCpuIdDeckCard("");
    setHelp("Choisis une carte dans ta zone de pioche");
    setShowWinnerModal(false);
    setIsP1Turn(true);
    setPlayerScore(0);
    setCpuScore(0);
    setRound(1);
    setSelectedChar({ label: "", value: 0, unit: "" });
    setCharCPU(0);
    setWinner(null);
    setAnimalComputer(null);
    setCharacteristicValidated(false);
  };
  return (
    <main>
      <Round round={round} />
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
            isResetting={isResetting}
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
              <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                <div className="flip-card-front">
                  {/* Contenu de la carte recto */}
                  {showVersoCard && !showRectoCard && (
                    <div className="backgroundImage">
                      {/* Contenu du verso */}
                      <p> </p>
                    </div>
                  )}
                </div>
                <div className="flip-card-back">
                  {/* Contenu de la carte verso */}
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
                      characteristicValidated={characteristicValidated}
                    />
                  )}
                </div>
              </div>
            </div>

            <p>
              {pseudo || "Joueur"} : {playerScore}
            </p>
          </div>
        </section>

        <section id="computer">
          <div
            className={`${"zoneDeJeuComputer"} ${!isP1Turn || isP1Turn === null ? "" : "grayed-out"}`}
          >
            <div
              id="imgComputerContainer"
              className={
                showVersoCardCPU && !showRectoCardCPU ? "backgroundImage" : ""
              }
            >
              <div className={`flip-card ${isFlippedCPU ? "flipped" : ""}`}>
                <div className="flip-card-front">
                  {/* Contenu de la carte recto */}
                  {showVersoCardCPU && !showRectoCardCPU && (
                    <div className="card-content">
                      {/* Contenu du verso */}
                      <p> </p>
                    </div>
                  )}
                </div>
                <div className="flip-card-back">
                  {/* Contenu de la carte verso */}
                  {showRectoCardCPU && animalComputer && (
                    <Animals_card
                      isP1={false}
                      animal={animalComputer}
                      selectedChar={selectedChar}
                      setSelectedChar={setSelectedChar}
                      setIsP1Turn={setIsP1Turn}
                      onValidateCharacteristic={() =>
                        setCharacteristicValidated(true)
                      }
                      characteristicValidated={characteristicValidated}
                    />
                  )}
                </div>
              </div>
            </div>
            <p>Ordinateur : {cpuScore}</p>
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
            isResetting={isResetting}
          />
        </div>
      </section>
      <Help help={help} />
      <Winner_modal
        show={showWinnerModal}
        onClose={() => setShowWinnerModal(false)}
      >
        <Winner winnerMessage={winnerMessage} winnerEmoji={winnerEmoji} />
      </Winner_modal>
    </main>
  );
}

export default Game_zone;
