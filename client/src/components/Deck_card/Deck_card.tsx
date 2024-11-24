import "./Deck_card.css";
import { useState } from "react";
import type { AnimalType } from "../../pages/Game_page";

interface Deck_cardProps {
  handleSetAnimalP1: (animal: AnimalType) => void;
  setShowVersoCard: (show: boolean) => void;
  isP1: boolean;
}

function Deck_card({
  isP1,
  handleSetAnimalP1,
  setShowVersoCard,
}: Deck_cardProps) {
  const [isButtonClicked, setIsButtonClicked] = useState(true);

  const getAnimal = () => {
    if (isP1 === true) {
      fetch("http://localhost:3310/api/animalsLibrary")
        .then((response) => response.json())
        .then((data) => {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          handleSetAnimalP1(data.results[randomIndex]);
          setIsButtonClicked(false);
          setShowVersoCard(true);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="deckCard">
      {isButtonClicked && (
        <button type="button" onClick={getAnimal} className="buttonDeckCard" />
      )}
    </div>
  );
}
export default Deck_card;
