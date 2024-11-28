import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./Game_page.css";
import Game_zone from "../components/Game_zone/Game_zone";
import Selected_characteristic from "../components/Selected_characteristic/Selected_characteristic";
import Selected_characteristic_CPU from "../components/Selected_characteristic_CPU/Selected_characteristic_CPU";

export type AnimalType = {
  nom: string;
  nom_male: string;
  nom_femelle: string;
  image: string;
  savais_tu: string;
  poids_kg: number;
  longueur_cm: number;
  longevite_ans: number;
  gestation_jours: number;
  vitesse_kmh: number;
};

export type SelectedCharType = {
  label: string;
  value: number;
  unit: string;
};

function Game_page() {
  const { pseudo } = useOutletContext<{ pseudo: string }>();
  const navigate = useNavigate(); // Pour naviguer entre les pages
  const [selectedChar, setSelectedChar] = useState<SelectedCharType>({
    label: "",
    value: 0,
    unit: "",
  });
  const [characteristicValidated, setCharacteristicValidated] =
    useState<boolean>(false);
  const [animalComputer, setAnimalComputer] = useState<AnimalType | null>(null);
  const [winnerMessage, setWinnerMessage] = useState<string | null>(null);
  const [winnerEmoji, setWinnerEmoji] = useState<string | null>(null);
  const [charCPU, setCharCPU] = useState<number | 0>(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [showRectoCardCPU, setShowRectoCardCPU] = useState(false);
  const [isFlippedCPU, setIsFlippedCPU] = useState(false);

  /*SECTION : Permet de naviguer vers l'Encyclopédie */
  const handleEncyclopediaClick = () => {
    navigate("/encyclopedia");
  };

  /*SECTION : Permet de récupérer une carte aléatoire dans l'API pour CPU */
  useEffect(() => {
    if (characteristicValidated) {
      const timer = setTimeout(() => {
        playComputerTurn();
      }, 1000); /*GREY : CINQUIEME CPU dévoile le recto de sa carte après 1s*/
      return () => clearTimeout(timer);
    }
  }, [characteristicValidated]);

  const playComputerTurn = () => {
    fetch("http://localhost:3310/api/animalsLibrary")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setAnimalComputer(data.results[randomIndex]);
        setShowRectoCardCPU(true);
        setIsFlippedCPU(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div id="gamePage">
      <div className="hide-mobile-screen">
        <Selected_characteristic selectedChar={selectedChar} winner={winner} />
        <Selected_characteristic_CPU
          charCPU={charCPU}
          selectedChar={selectedChar}
          winner={winner}
        />
      </div>
      <button
        type="button"
        onClick={handleEncyclopediaClick}
        className="encyclopedia-button"
      >
        <span>Encyclopédie</span>
      </button>

      <Game_zone
        pseudo={pseudo}
        selectedChar={selectedChar}
        setSelectedChar={setSelectedChar}
        setCharacteristicValidated={setCharacteristicValidated}
        characteristicValidated={characteristicValidated}
        animalComputer={animalComputer}
        winnerMessage={winnerMessage}
        winnerEmoji={winnerEmoji}
        setWinnerMessage={setWinnerMessage}
        setWinnerEmoji={setWinnerEmoji}
        setAnimalComputer={setAnimalComputer}
        setCharCPU={setCharCPU}
        charCPU={charCPU}
        setWinner={setWinner}
        showRectoCardCPU={showRectoCardCPU}
        isFlippedCPU={isFlippedCPU}
        setShowRectoCardCPU={setShowRectoCardCPU}
        setIsFlippedCPU={setIsFlippedCPU}
      />
    </div>
  );
}

export default Game_page;
