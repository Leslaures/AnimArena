import "./Deck.css";
import type { AnimalType } from "../../pages/Game_page";
import Deck_card from "../Deck_card/Deck_card";

interface Deck_cardProps {
  handleSetAnimalP1: (animal: AnimalType) => void;
  setShowVersoCard: (show: boolean) => void;
  isP1: boolean;
}

function Deck({ isP1, handleSetAnimalP1, setShowVersoCard }: Deck_cardProps) {
  return (
    <div id="deck">
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
      />
    </div>
  );
}
export default Deck;
