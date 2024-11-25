import { useNavigate, useOutletContext } from "react-router-dom";
import GameRulesModal from "../components/GameRulesModal/GameRulesModal";
import Game_zone from "../components/Game_zone/Game_zone";
import "./Game_page.css";
import { useEffect, useState } from "react";
import Selected_characteristic from "../components/Selected_characteristic/Selected_characteristic";

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

function Game_page() {
  const { pseudo } = useOutletContext<{ pseudo: string }>();
  const navigate = useNavigate(); // Pour naviguer entre les pages
  const [selectedChar, setSelectedChar] = useState<string>("");
  const [characteristicValidated, setCharacteristicValidated] =
    useState<boolean>(false);
  const [animalComputer, setAnimalComputer] = useState<AnimalType | null>(null);
  const [winnerMessage, setWinnerMessage] = useState<string | null>(null);
  const [winnerEmoji, setWinnerEmoji] = useState<string | null>(null);

  //Permet de naviguer vers l'Encyclopédie
  const handleEncyclopediaClick = () => {
    navigate("/encyclopedia");
  };

  // Permet de récupérer une carte aléatoire dans l'API pour CPU
  useEffect(() => {
    if (characteristicValidated) {
      const timer = setTimeout(() => {
        playComputerTurn();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [characteristicValidated]);

  const playComputerTurn = () => {
    fetch("http://localhost:3310/api/animalsLibrary")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setAnimalComputer(data.results[randomIndex]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div id="gamePage">
      <div className="hide-mobile-screen">
        <Selected_characteristic selectedChar={selectedChar} />
        <GameRulesModal />
      </div>
      {/* Bouton vers l'Encyclopédie */}
      <button
        type="button"
        onClick={handleEncyclopediaClick}
        className="encyclopedia-button"
      >
        Encyclopédie
      </button>

      <Game_zone
        pseudo={pseudo}
        selectedChar={selectedChar}
        setSelectedChar={setSelectedChar}
        setCharacteristicValidated={setCharacteristicValidated}
        animalComputer={animalComputer}
        winnerMessage={winnerMessage}
        winnerEmoji={winnerEmoji}
        setWinnerMessage={setWinnerMessage}
        setWinnerEmoji={setWinnerEmoji}
      />
    </div>
  );
}

export default Game_page;
