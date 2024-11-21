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
  vitesse_kmh: number;
};

interface Deck_cardProps {
  setAnimalProp: (animal: AnimalType) => void;
}

function Deck({ setAnimalProp }: Deck_cardProps) {
  return (
    <div id="deck">
      <Deck_card setAnimalProp={setAnimalProp} />
      <Deck_card setAnimalProp={setAnimalProp} />
      <Deck_card setAnimalProp={setAnimalProp} />
      <Deck_card setAnimalProp={setAnimalProp} />
      <Deck_card setAnimalProp={setAnimalProp} />
    </div>
  );
}
export default Deck;
