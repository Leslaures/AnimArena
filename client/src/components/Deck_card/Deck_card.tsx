import "./Deck_card.css";
import { useEffect, useState } from "react";
import type { AnimalType } from "../../pages/Game_page";

interface Deck_cardProps {
  handleSetAnimalP1: (animal: AnimalType) => void;
  showVersoCard: boolean;
  setShowVersoCard: (show: boolean) => void;
  isP1: boolean;
  cpuIdDeckCard: string;
  indexInDeck: string;
}

function Deck_card({
  isP1,
  handleSetAnimalP1,
  cpuIdDeckCard,
  indexInDeck,
  showVersoCard,
  setShowVersoCard,
}: Deck_cardProps) {
  const [isButtonClickable, setIsButtonClickable] = useState(true);
  const [isDistributing, setIsDistributing] = useState(false);

  // Permet de récupérer une carte aléatoire dans l'API pour P1
  const getAnimal = () => {
    setIsDistributing(true);
    setTimeout(() => {
      if (isP1 === true) {
        fetch("http://localhost:3310/api/animalsLibrary")
          .then((response) => response.json())
          .then((data) => {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            handleSetAnimalP1(data.results[randomIndex]);
            setIsButtonClickable(false);
            setShowVersoCard(true);
            setIsDistributing(false);
          })
          .catch((error) => {
            console.error(error);
            setIsDistributing(false);
          });
      }
    }, 500);
  };

  //Permet de défausser la petite carte du CPU
  useEffect(() => {
    if (!isP1 && showVersoCard === true && indexInDeck === cpuIdDeckCard) {
      setIsButtonClickable(false);
    }
  }, [showVersoCard, isP1, indexInDeck, cpuIdDeckCard]);

  return (
    <div className="deckCard">
      {isButtonClickable && (
        <button
          type="button"
          onClick={getAnimal}
          className={`buttonDeckCard ${isDistributing && isP1 ? "distributing" : ""} ${isP1 ? "buttonDeckCardClickable" : ""}`}
        >
          <p>{indexInDeck}</p>
        </button>
      )}
    </div>
  );
}
export default Deck_card;
