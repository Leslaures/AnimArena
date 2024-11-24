import "./Deck.css";
import type { AnimalType } from "../../pages/Game_page";
import Deck_card from "../Deck_card/Deck_card";

interface Deck_cardProps {
  handleSetAnimalP1: (animal: AnimalType) => void;
  setShowVersoCard: (show: boolean) => void;
  isP1: boolean;
  cpuIdDeckCard: string;
  showVersoCard: boolean;
}

function Deck({
  cpuIdDeckCard,
  isP1,
  handleSetAnimalP1,
  setShowVersoCard,
  showVersoCard,
}: Deck_cardProps) {
  return (
    <div id="deck">
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
        cpuIdDeckCard={cpuIdDeckCard}
        indexInDeck={"1"}
        showVersoCard={showVersoCard}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
        cpuIdDeckCard={cpuIdDeckCard}
        indexInDeck={"2"}
        showVersoCard={showVersoCard}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
        cpuIdDeckCard={cpuIdDeckCard}
        indexInDeck={"3"}
        showVersoCard={showVersoCard}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
        cpuIdDeckCard={cpuIdDeckCard}
        indexInDeck={"4"}
        showVersoCard={showVersoCard}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
        cpuIdDeckCard={cpuIdDeckCard}
        indexInDeck={"5"}
        showVersoCard={showVersoCard}
      />
    </div>
  );
}
export default Deck;
