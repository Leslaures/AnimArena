import "./Deck.css";
import Deck_card from "../Deck_card/Deck_card";

type AnimalType = {
  nom: string;
  nom_male: string;
  nom_femelle: string;
  image: string;
  savais_tu: string;
  poids_kg: number;
  longueur_cm: number;
  longevite_ans: number;
  gestation_jours: number;
};

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
