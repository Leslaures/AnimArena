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
  longevite: number;
  gestation_jours: number;
};

interface Deck_cardProps {
  setAnimalProp: (animal: AnimalType) => void;
  setShowVersoCard: (show: boolean) => void;
}

function Deck({ setAnimalProp, setShowVersoCard }: Deck_cardProps) {
  return (
    <div id="deck">
      <Deck_card
        setAnimalProp={setAnimalProp}
        setShowVersoCard={setShowVersoCard}
      />
      <Deck_card
        setAnimalProp={setAnimalProp}
        setShowVersoCard={setShowVersoCard}
      />
      <Deck_card
        setAnimalProp={setAnimalProp}
        setShowVersoCard={setShowVersoCard}
      />
      <Deck_card
        setAnimalProp={setAnimalProp}
        setShowVersoCard={setShowVersoCard}
      />
      <Deck_card
        setAnimalProp={setAnimalProp}
        setShowVersoCard={setShowVersoCard}
      />
    </div>
  );
}
export default Deck;
