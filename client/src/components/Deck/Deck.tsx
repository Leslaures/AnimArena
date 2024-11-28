import "./Deck.css";
import type { AnimalType } from "../../pages/Game_page";
import Deck_card from "../Deck_card/Deck_card";

interface Deck_cardProps {
  handleSetAnimalP1: (animal: AnimalType) => void;
  setShowVersoCard: (show: boolean) => void;
  isP1: boolean;
  cpuIdDeckCard: string;
  showVersoCard: boolean;
  setIsP1Turn: (show: boolean) => void;
  isResetting: boolean;
}

function Deck({
  cpuIdDeckCard,
  isP1,
  handleSetAnimalP1,
  setShowVersoCard,
  showVersoCard,
  setIsP1Turn,
  isResetting,
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
        setIsP1Turn={setIsP1Turn}
        isResetting={isResetting}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
        cpuIdDeckCard={cpuIdDeckCard}
        indexInDeck={"2"}
        showVersoCard={showVersoCard}
        setIsP1Turn={setIsP1Turn}
        isResetting={isResetting}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
        cpuIdDeckCard={cpuIdDeckCard}
        indexInDeck={"3"}
        showVersoCard={showVersoCard}
        setIsP1Turn={setIsP1Turn}
        isResetting={isResetting}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
        cpuIdDeckCard={cpuIdDeckCard}
        indexInDeck={"4"}
        showVersoCard={showVersoCard}
        setIsP1Turn={setIsP1Turn}
        isResetting={isResetting}
      />
      <Deck_card
        handleSetAnimalP1={handleSetAnimalP1}
        setShowVersoCard={setShowVersoCard}
        isP1={isP1}
        cpuIdDeckCard={cpuIdDeckCard}
        indexInDeck={"5"}
        showVersoCard={showVersoCard}
        setIsP1Turn={setIsP1Turn}
        isResetting={isResetting}
      />
    </div>
  );
}
export default Deck;
